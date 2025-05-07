import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProdutoDto {
    @ApiProperty({ description: 'ID do produto' })
    @IsNumber()
    @IsNotEmpty()
    ID: number;

    @ApiProperty({ description: 'ID do estoque' })
    @IsNumber()
    @IsNotEmpty()
    idEstoque: number;

    @ApiProperty({ description: 'Código de barra do produto' })
    @IsString()
    @IsNotEmpty()
    codigoBarras: string;

    @ApiProperty({ description: 'Marca do produto' })
    @IsString()
    @IsNotEmpty()
    marca: string;
}
