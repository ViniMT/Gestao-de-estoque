import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsNumber } from "class-validator";
import { StatusVenda } from "@prisma/client";

export class CreateVendaDto {
    @ApiProperty({ description: 'Data da venda' })
    @IsNotEmpty()
    @IsDate()
    dataVenda: Date | string;

    @ApiProperty({ description: 'ID do usuário' })
    @IsNotEmpty()
    @IsNumber()
    idUsuario: number;

    @ApiProperty({ description: 'ID do cliente' })
    @IsNotEmpty()
    @IsNumber()
    idCliente: number;

    @ApiProperty({ description: 'Valor total da venda' })
    @IsNotEmpty()
    @IsNumber()
    valorTotal: number;

    @ApiProperty({ description: 'Status da venda' })
    @IsNotEmpty()
    @IsString()
    status: StatusVenda;
}
