import { sqz } from "src/Configure/conn";
export class innerJoinMedicoEspecialidade {


    async getById(id:number):Promise<object>{ //FAZ UM INNER JOIN COM MEDICOS E ESPECIALIDADES

        try{
            var d;
            const tipos = require('sequelize');
      
          const con = await  sqz.query("SELECT medicos.*, medicoespecialidades.id_especialidade, especialidades.nm_especialidade FROM medicos INNER JOIN  medicoespecialidades ON medicos.id_medico = medicoespecialidades.id_medico INNER JOIN especialidades ON especialidades.id_especialidade = medicoespecialidades.id_especialidade WHERE medicos.id_medico = :id;", 
                  
            { replacements: { id: id }, type: tipos.JOIN}
                     
            ).then(dados => {
            d = dados[0];
            });
           
        }
        catch(exception){
            return exception;
        }
    
        return d;
    }
    
  async   getVeryEspec(){ //BUSCA MÉDICOS COM MAIS DE 2 ESPECIALIDADES

    try{
        var d;
        const tipos = require('sequelize');
  
      const con = await  sqz.query("SELECT medicos.id_medico, medicos.nm_medico, count(medicoespecialidades.id_medico) as numero_de_especialidades FROM medicos INNER JOIN  medicoespecialidades ON medicos.id_medico = medicoespecialidades.id_medico   GROUP BY  medicoespecialidades.id_medico HAVING COUNT(*) >  2;", 
              
        {type: tipos.JOIN}
                 
        ).then(dados => {
        d = dados[0];
        });
       
    }
    catch(exception){
        return exception;
    }

    return d;

    }
}