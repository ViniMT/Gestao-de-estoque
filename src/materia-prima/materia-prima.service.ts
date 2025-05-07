import { PrismaClient } from '@prisma/client';
import { CreateMateriaPrimaDto } from './dto/create-materia-prima.dto';
import { UpdateMateriaPrimaDto } from './dto/update-materia-prima.dto';
export class MateriaPrimaService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  async findAll() {
    return this.prisma.materiasPrima.findMany();
  }
  async findOne(id: number) {
    return this.prisma.materiasPrima.findUnique({
      where: { id },
    });
  }
  async create(data: CreateMateriaPrimaDto) {
    return this.prisma.materiasPrima.create({
      data,
    });
  }
  async update(id: number, data: UpdateMateriaPrimaDto) {
    return this.prisma.materiasPrima.update({
      where: { id },
      data,
    });
  }
  async remove(id: number) {
    return this.prisma.materiasPrima.delete({
      where: { id },
    });
  }
}
