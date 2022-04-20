import { Body, Controller,  Delete,  Get, HttpStatus, Param, Post, Put} from '@nestjs/common';
import { pluralize } from 'sequelize/types/utils';
import { AppService } from './app.service';
import { pcriarmedico } from './Body/postcriarmedico';
import { PutUpdateMedico } from './Body/PutUpdateMedico';




@Controller('medico')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMedicos() {
    return this.appService.getAllMedic();
  }

  @Get(':id')
  getMedicoID(@Param('id') id:number) {
    return this.appService.pesquisarMedicoID(id);
  }

static getrua;
static resultados;

  @Post()
  async adicionarmedico(@Body() postcrairmedico:pcriarmedico){
    
      const fetch = require('node-fetch');
      var l;
     await fetch("https://viacep.com.br/ws/" + postcrairmedico.cep + "/json", { method: 'GET' })
      .then(response => response.json())
      .then(textoResultado => {
        AppController.getrua = textoResultado;
        AppController.resultados = textoResultado;
      })
      .catch(err => console.log(err.message))      
      return this.appService.createMedic(postcrairmedico.nome,postcrairmedico.crm,postcrairmedico.fixo,postcrairmedico.celular,postcrairmedico.numero,postcrairmedico.cep,AppController.resultados['logradouro'],AppController.resultados['bairro'],AppController.resultados['uf'],AppController.resultados['localidade'],postcrairmedico.especialidade);
  }
  @Delete(':id')
  async deleteMedic(@Param('id') id:number){ 
    return this.appService.deletarMedico(id); 
  }
  @Put()
  updateMedico(@Body()update: PutUpdateMedico){
    return this.appService.updateMedico(update.id,update.nome,update.crm,update.fixo,update.celular);
  }

}
//ABAIXO COMEÇA A  BUSCA POR TODOS OS CAMPOS DO MÉDICO
@Controller('especialidade')
  export class appHome {
    constructor(private readonly appService: AppService) {}
  @Get()
    especialidade(): Promise<object>{
      return  this.appService.getEspEsp();
  }
}

@Controller('medico/procurar/maisespecialidades')
export class medicomaisesp {
  constructor(private readonly appService: AppService) {}
@Get()
getMaisEsp(){
    return  this.appService.medicoMaisdeDuasEsp();
}
}

@Controller('medico/procurar/nome')
export class procurarnome {
  constructor(private readonly appService: AppService) {}
@Get(':nome')
  getNome(@Param('nome') nome:string){
    return  this.appService.pesquisarMedicoNome(nome);
}
}
@Controller('medico/procurar/crm')
export class medicoprocurarcrm {
  constructor(private readonly appService: AppService) {}
@Get(':crm')
  getCRM(@Param('crm') crm:number){
    return  this.appService.pesquisarMedicoCRM(crm);
}
}

@Controller('medico/procurar/fixo')
export class medicofixo {
  constructor(private readonly appService: AppService) {}
@Get(':fixo')
  getfixo(@Param('fixo') fixo:number){
    return  this.appService.pesquisarmedicofixo(fixo);
}
}

@Controller('medico/procurar/celular')
export class medicocelular {
  constructor(private readonly appService: AppService) {}
@Get(':cel')
  getCel(@Param('cel') cel:number){
    return  this.appService.pesquisarmedicocelular(cel);
}
}

@Controller('medico/procurar/cep')
export class medicocep {
  constructor(private readonly appService: AppService) {}
@Get(':cep')
  getCep(@Param('cep') cep:number){
    return  this.appService.pesquisarmedicocep(cep);
}
}



@Controller('medico/procurar/rua')
export class medicorua {
  constructor(private readonly appService: AppService) {}
@Get(':rua')
  getrua(@Param('rua') rua:string){
    return  this.appService.pesquisarmediconomerua(rua);
}
}


@Controller('medico/procurar/localidade')
export class medicolocalidade {
  constructor(private readonly appService: AppService) {}
@Get(':loc')
  getLocalidade(@Param('loc') loc:string){
    return  this.appService.pesqmedicolocalidade(loc);
}
}

@Controller('medico/procurar/bairro')
export class medicobairro {
  constructor(private readonly appService: AppService) {}
@Get(':bairro')
  getBairro(@Param('bairro') bairro:string){
    return  this.appService.pesquisarmediconomedobairro(bairro);
}
}

@Controller('medico/procurar/uf')
export class medicouf {
  constructor(private readonly appService: AppService) {}
@Get(':uf')
  getUF(@Param('uf') uf:string){
    return  this.appService.pesquimedicoUF(uf);
}
}

@Controller('medico/procurar/nrua')
export class mediconumrua {
  constructor(private readonly appService: AppService) {}
@Get(':nrua')
  getnumbRua(@Param('nrua') nrua:number){
    return  this.appService.pesquisarmediconumrua(nrua);
}
}

