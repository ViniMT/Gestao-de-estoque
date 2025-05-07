import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class CreateMateriaPrimaDto {
    @ApiProperty({ description: 'ID da matéria prima no estoque' })
    @IsNumber()
    @IsNotEmpty()
    idEstoque: number;

    @ApiProperty({ description: 'Composição da matéria prima' })
    @IsString()
    @IsNotEmpty()
    composicao: string;

    @ApiProperty({ description: 'ID da matéria prima comprada' })
    @IsNumber()
    @IsNotEmpty()
    idMateriaPrimaComprada: number;
}
