import { ApiProperty } from '@nestjs/swagger';
import {  IsNotEmpty, IsString, } from 'class-validator';
export class CreateClienteDto {
  @ApiProperty({ description: 'Nome do cliente' })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({ description: 'Endereço do cliente' })
  @IsNotEmpty()
  @IsString()
  endereco: string;

  @ApiProperty({ description: 'Telefone do cliente' })
  @IsNotEmpty()
  @IsString()
  telefone: string;

  @ApiProperty({ description: 'Email do cliente' })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({ description: 'Tipo de cliente' })
  @IsNotEmpty()
  @IsString()
  tipoCliente: string;
}
