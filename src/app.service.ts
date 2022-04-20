import { Injectable } from '@nestjs/common';
import { innerJoinMedicoEspecialidade } from './Model/innerJoinMedicoEspecialidade';


@Injectable()
export class AppService {

  //MÉDICO VARIÁVEIS
  pesqmedicoinnerjoin = new innerJoinMedicoEspecialidade();
  m =   require('./Model/Medico');
  me = require('./Model/MedicoEspecialidade') ;   
  esp =  require('./Model/Especialidade');
      

   id;
  //INSERIR NOVO MÉDICO COM ESPECIALIDADE
    async createMedic(nome:string,crm:number, telfixo:number, celular:number,numrua:number,cep:number,nomerua:object,bairro:object, UF:string,localidade:string,especialidade:string) {  
     var resultado;
      var esp = [];
      var cont = 0;
      var p = 0;
      while (cont < especialidade.length) {
      if (especialidade.charAt(cont) != ',') {
        if (esp[p]!= null) {
          esp[p] = esp[p] + especialidade.charAt(cont);
        }else{
          esp[p] =  especialidade.charAt(cont);
        }
      
      }else{
        p++;
      }
        cont ++;
      }
      if (esp.length < 2) {
        return "{ \n \"Erro\":\"O médico deve ter mais de uma especialidade. Exemplo: 1,2\" \n}"
      }

      try {
 
          const  medico = await this.m.create({
          nm_medico: nome,
          num_crm: crm,
          num_telfixo: telfixo,
          num_celular: celular,
          nm_rua: nomerua,
          num_cep: cep,
          num_rua: numrua,
          nm_bairro: bairro,
          sg_uf : UF,
          nm_localidade: localidade
        }).then(result => {

          resultado = result;
        });

        for (let index = 0; index < esp.length; index++) {
         const ee = await this.me.create({
           id_medico: resultado['id_medico'],
           id_especialidade: esp[index]
         });
          
        }

    
        return this.pesqmedicoinnerjoin.getById(resultado['id_medico']);
       
      } catch (error) {
        return  error;
        
      }
  }

async updateMedico(id:number,nome:string,crm:number,fixo:number,celular:number){
  const medico = await this.m.findByPk(id);
  medico.nm_medico = nome;
  medico.num_crm = crm;
  medico.num_telfixo = fixo;
  medico.num_celular = celular;
  const rSalvos = await medico.save();
  return rSalvos;
}

async deletarMedico(id:number){
  const medico = await this.m.findByPk(id);
  const resultado = medico.destroy();
  return resultado;
}



  //AS PARTES DE BAIXO SÃO AS ESPECIALIDADES

  

  async getEspEsp(){   //PESQUISA TODAS ESPECIALIDADES

 
    const especialidade = await this.esp.findAll();
    return especialidade;
 
  }


  //PESQUISAS-----------------------------------------------
  async medicoMaisdeDuasEsp(){   //PESQUISA MEDICOS COM MAIS DE DUAS ESPECIALIDADES
   
   return this.pesqmedicoinnerjoin.getVeryEspec();
   
  }


    async pesquisarMedicoID(id:number) {    //PESQUISA O MÉDICO PELO SEU ID

     return this.pesqmedicoinnerjoin.getById(id)
      
    }
    async pesquisarMedicoNome(nome:string): Promise<object> {  //PESQUISA MÉDICOS PELO NOME 
      const  { Op } = require('sequelize');
      const  medico = await this.m.findAll({
       
        where: 
       { 
      
         nm_medico: { [Op.like]: `%${nome}%` }
        
        
        }
     });
     return medico;
    }
    async pesquisarMedicoCRM(crm:number): Promise<object> {  //PESQUISAR MÉDICO PELO CRM

  
      const  medico = await this.m.findOne({
         where: 
        { 
          num_crm:  crm  
        }
      });
      return medico;
    }
    async pesquisarmedicofixo(fixo:number): Promise<object> {  //PESQUISA MÉDICOS /TEL FIXO 

      const  medico = await this.m.findAll({
         where: 
        { 
          num_telfixo: fixo
        }
      });
      return medico;
    }
    async pesquisarmedicocelular(celular:number): Promise<object> {  //PESQUISA MÉDICOS PELO CELULAR 

      const  medico = await this.m.findAll({
         where: 
        { 
          num_celular: celular
        }
      });
      return medico;
    }
    async pesquisarmedicocep(cep:number): Promise<object> {  //PESQUISA MÉDICOS PELO CEP 

      const  medico = await this.m.findAll({
         where: 
        { 
          num_cep: cep
        }
      });
      return medico;
    }
    async pesquisarmediconumrua(numrua:number): Promise<object> {  //PESQUISA MÉDICOS PELO NUMERO DA RUA 

      const  medico = await this.m.findAll({
         where: 
        { 
          num_rua: numrua
        }
      });
      return medico;
    }
    async pesquisarmediconomerua(nomerua:string): Promise<object> {  //PESQUISA MÉDICOS PELO NOME DA RUA
      const  { Op } = require('sequelize');
      const  medico = await this.m.findAll({
         where: 
        { 
          nm_rua: { [Op.like]: `%${nomerua}%` }
        }
      });
      return medico;
    }
    async pesquisarmediconomedobairro(nmbairro:string): Promise<object> {  //PESQUISA MÉDICOS PELO NOME DA RUA
      const  { Op } = require('sequelize');
      const  medico = await this.m.findAll({
         where: 
        { 
          nm_bairro: { [Op.like]: `%${nmbairro}%` }
        }
      });
      return medico;
    }

    async pesqmedicolocalidade(localidade:string): Promise<object> {  //PESQUISA MÉDICOS PELO NOME DA CIDADE
      const  { Op } = require('sequelize');
      const  medico = await this.m.findAll({
         where: 
        { 
          nm_localidade: { [Op.like]: `%${localidade}%` }
        }
      });
      return medico;
    }
    async pesquimedicoUF(UF:string): Promise<object> {  //PESQUISA MÉDICOS PELO NOME DO ESTADO
      const  { Op } = require('sequelize');
      const  medico = await this.m.findAll({
         where: 
        { 
          sg_uf: { [Op.like]: `%${UF}%` }
        }
      });
      return medico;
    }
    
    async getAllMedic(){    //PESQUISA TODOS OS MÉDICOS
 
      const m =   require('./Model/Medico');
      var resultado;
      const  medico = await m.findAll({
        raw: true,
        nest: true
      })
      .then(res => {
        resultado = res;
      
      });
  
  
      return   resultado;
  
    }
  
}
