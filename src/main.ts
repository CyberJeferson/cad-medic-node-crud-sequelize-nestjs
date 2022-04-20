import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { syncmodels } from './Model/syncmodels';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //SINCRONIZANDO AS TABELAS SEM O MIGRATION A BASE DE DADOS DEVE EXISTIR
  const sync =  new syncmodels();
  const medico = require('./Model/Medico');
  const especialidade = require('./Model/Especialidade');
  const medicoespecialidade = require('./Model/MedicoEspecialidade');
  await sync.syncModels();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
