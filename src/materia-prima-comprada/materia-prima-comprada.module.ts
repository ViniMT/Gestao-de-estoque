import { Module } from '@nestjs/common';
import { MateriaPrimaCompradaService } from './materia-prima-comprada.service';
import { MateriaPrimaCompradaController } from './materia-prima-comprada.controller';

@Module({
  controllers: [MateriaPrimaCompradaController],
  providers: [MateriaPrimaCompradaService],
})
export class MateriaPrimaCompradaModule {}
