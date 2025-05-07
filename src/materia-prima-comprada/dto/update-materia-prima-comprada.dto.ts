import { PartialType } from '@nestjs/swagger';
import { CreateMateriaPrimaCompradaDto } from './create-materia-prima-comprada.dto';

export class UpdateMateriaPrimaCompradaDto extends PartialType(CreateMateriaPrimaCompradaDto) {}
