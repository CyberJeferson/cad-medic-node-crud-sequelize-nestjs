import { UseSchema } from 'nestjs-yup';
import {  isNotEmpty, IsNotEmpty, IsNumberString, IsPostalCode, MaxLength, MinLength } from 'class-validator';
import { string } from 'yup';
import { Type } from 'class-transformer';




export class pcriarmedico {
  @IsNotEmpty()
  @MaxLength(120)
  nome: string;
  @IsNotEmpty()
  @MinLength(7)
  @MaxLength(7)
  crm: number;
  @MaxLength(10)
  @MinLength(10)
  @IsNumberString()
  @IsNotEmpty()
  fixo: number;
  @MaxLength(11)
  @MinLength(11)
  @IsNumberString()
  @IsNotEmpty()
  celular:number;
  @IsNotEmpty()
  @MaxLength(8)
  @MinLength(8)
  cep:number;
  @IsNotEmpty()
  @IsNumberString()
  numero:number;
  @IsNotEmpty()
  especialidade:string;
  
}