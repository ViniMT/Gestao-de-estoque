import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MateriaPrimaCompradaService } from './materia-prima-comprada.service';
import { CreateMateriaPrimaCompradaDto } from './dto/create-materia-prima-comprada.dto';
import { UpdateMateriaPrimaCompradaDto } from './dto/update-materia-prima-comprada.dto';

@Controller('materia-prima-comprada')
export class MateriaPrimaCompradaController {
  constructor(private readonly materiaPrimaCompradaService: MateriaPrimaCompradaService) {}

  @Post()
  create(@Body() createMateriaPrimaCompradaDto: CreateMateriaPrimaCompradaDto) {
    return this.materiaPrimaCompradaService.create(createMateriaPrimaCompradaDto);
  }

  @Get()
  findAll() {
    return this.materiaPrimaCompradaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.materiaPrimaCompradaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMateriaPrimaCompradaDto: UpdateMateriaPrimaCompradaDto) {
    return this.materiaPrimaCompradaService.update(+id, updateMateriaPrimaCompradaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.materiaPrimaCompradaService.remove(+id);
  }
}
