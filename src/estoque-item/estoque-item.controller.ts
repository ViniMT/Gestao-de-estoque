import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstoqueItemService } from './estoque-item.service';
import { CreateEstoqueItemDto } from './dto/create-estoque-item.dto';
import { UpdateEstoqueItemDto } from './dto/update-estoque-item.dto';

@Controller('estoque-item')
export class EstoqueItemController {
  constructor(private readonly estoqueItemService: EstoqueItemService) {}

  @Post()
  create(@Body() createEstoqueItemDto: CreateEstoqueItemDto) {
    return this.estoqueItemService.create(createEstoqueItemDto);
  }

  @Get()
  findAll() {
    return this.estoqueItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estoqueItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstoqueItemDto: UpdateEstoqueItemDto) {
    return this.estoqueItemService.update(+id, updateEstoqueItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estoqueItemService.remove(+id);
  }
}
