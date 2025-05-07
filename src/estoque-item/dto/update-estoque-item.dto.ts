import { PartialType } from '@nestjs/swagger';
import { CreateEstoqueItemDto } from './create-estoque-item.dto';

export class UpdateEstoqueItemDto extends PartialType(CreateEstoqueItemDto) {}
