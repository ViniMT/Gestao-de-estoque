import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MateriaPrimaService } from './materia-prima.service';
import { CreateMateriaPrimaDto } from './dto/create-materia-prima.dto';
import { UpdateMateriaPrimaDto } from './dto/update-materia-prima.dto';

@Controller('materia-prima')
export class MateriaPrimaController {
  constructor(private readonly materiaPrimaService: MateriaPrimaService) {}

  @Post()
  create(@Body() createMateriaPrimaDto: CreateMateriaPrimaDto) {
    return this.materiaPrimaService.create(createMateriaPrimaDto);
  }

  @Get()
  findAll() {
    return this.materiaPrimaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.materiaPrimaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMateriaPrimaDto: UpdateMateriaPrimaDto) {
    return this.materiaPrimaService.update(+id, updateMateriaPrimaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.materiaPrimaService.remove(+id);
  }
}
