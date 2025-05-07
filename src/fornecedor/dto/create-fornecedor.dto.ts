import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, IsNumber } from "class-validator";

export class CreateFornecedorDto {
    @ApiProperty({ description: 'Nome do fornecedor' })
    @IsString()
    @IsNotEmpty()
    nome: string;

    @ApiProperty({ description: 'CNPJ do fornecedor' })
    @IsString()
    @IsNotEmpty()
    cnpj: string;

    @ApiProperty({ description: 'Telefone do fornecedor' })
    @IsNumber()
    @IsNotEmpty()
    telefone: number;

    @ApiProperty({ description: 'Email do fornecedor' })
    @IsEmail()
    @IsNotEmpty()
    email: string;
}
