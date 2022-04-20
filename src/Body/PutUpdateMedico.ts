import {IsNotEmpty, IsNumberString,  MaxLength, MinLength } from 'class-validator';
export class PutUpdateMedico {
  @IsNotEmpty()
  @MaxLength(11)
  id:number;
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
}