import { PrismaClient } from '@prisma/client';
import { CreateMateriaPrimaCompradaDto } from './dto/create-materia-prima-comprada.dto';
import { UpdateMateriaPrimaCompradaDto } from './dto/update-materia-prima-comprada.dto';
export class MateriaPrimaCompradaService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  async findAll() {
    return this.prisma.materiasPrimasComprada.findMany();
  }
  async findOne(id: number) {
    return this.prisma.materiasPrimasComprada.findUnique({
      where: { id },
    });
  }
  async create(data: CreateMateriaPrimaCompradaDto) {
    return this.prisma.materiasPrimasComprada.create({
      data,
    });
  }
  async update(id: number, data: UpdateMateriaPrimaCompradaDto) {
    return this.prisma.materiasPrimasComprada.update({
      where: { id },
      data,
    });
  }
  async remove(id: number) {
    return this.prisma.materiasPrimasComprada.delete({
      where: { id },
    });
  }
}
