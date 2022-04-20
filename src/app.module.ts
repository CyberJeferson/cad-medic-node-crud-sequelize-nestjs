import { Module } from '@nestjs/common';
import { AppController, appHome,procurarnome,medicoprocurarcrm, medicobairro, medicocelular, medicofixo, medicolocalidade, medicouf, medicocep, medicomaisesp, medicorua,mediconumrua } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    AppController, 
    appHome,
    procurarnome,
    medicoprocurarcrm,
    medicobairro,
    medicocelular,
    medicofixo,
    medicolocalidade,
    medicouf,
    medicocep,
    medicomaisesp,
    medicorua,
    mediconumrua
  ],
  providers: [AppService]
  
})
export class AppModule {}
