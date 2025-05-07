import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateEstoqueItemDto {

    @ApiProperty({ description: 'Nome do item' })
    @IsString()
    @IsNotEmpty()
    nome: string;

    @ApiProperty({ description: 'Descrição do item' })
    @IsString()
    descricao: string;

    @ApiProperty({ description: 'Tipo do item' })
    @IsString()
    @IsNotEmpty()
    tipo: string;

    @ApiProperty({ description: 'Unidade de medida do item' })
    @IsString()
    @IsNotEmpty()
    unidadeMedida: string;

    @ApiProperty({ description: 'Preço unitário do item' })
    @IsNumber()
    @IsNotEmpty()
    precoUnitario: number;

    @ApiProperty({ description: 'Quantidade do item' })
    @IsNumber()
    @IsNotEmpty()
    quantidade: number;

    @ApiProperty({ description: 'Fornecedor do item' })
    @IsString()
    fornecedor: string;
    idFornecedor: any;
}
