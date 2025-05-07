import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsNotEmpty, IsString } from "class-validator";

export class CreateMateriaPrimaCompradaDto {
    @ApiProperty({ description: 'Id da materia prima comprada' })
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @ApiProperty({ description: 'Nome da materia prima comprada' })
    @IsString()
    @IsNotEmpty()
    nome: string;

    @ApiProperty({ description: 'Tipo da materia prima comprada' })
    @IsString()
    @IsNotEmpty()
    tipo: string;

    @ApiProperty({ description: 'Quantidade da materia prima comprada' })
    @IsNumber()
    @IsNotEmpty()
    quantidade: number;

    @ApiProperty({ description: 'Id do fornecedor' })
    @IsNumber()
    @IsNotEmpty()
    idFornecedor: number;
}
