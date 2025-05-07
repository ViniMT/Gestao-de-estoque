import { ApiProperty } from "@nestjs/swagger";
import { TipoUsuario } from "@prisma/client";
import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateUsuarioDto {
    @ApiProperty({ description: 'Nome do usuário' })
    @IsString()
    @IsNotEmpty()
    nome: string;

    @ApiProperty({ description: 'Email do usuário' })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ description: 'Senha do usuário' })
    @IsString()
    @IsNotEmpty()
    senha: string;

    @ApiProperty({ description: 'Tipo do usuário', enum: TipoUsuario })
    @IsEnum(TipoUsuario)
    @IsNotEmpty()
    tipo: TipoUsuario;
}
