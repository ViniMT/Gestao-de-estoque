import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateItemVendaDto {
  @ApiProperty({ description: 'ID da venda' })
  @IsNotEmpty()
  @IsNumber()
  idVenda: number;

  @ApiProperty({ description: 'ID do produto' })
  @IsNotEmpty()
  @IsNumber()
  idProduto: number;

  @ApiProperty({ description: 'Quantidade do produto' })
  @IsNotEmpty()
  @IsNumber()
  quantidade: number;

  @ApiProperty({ description: 'Valor unitário do produto' })
  @IsNotEmpty()
  @IsNumber()
  valorUnitario: number;
}
