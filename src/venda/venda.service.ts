import { PrismaClient } from '@prisma/client';
import { CreateVendaDto } from './dto/create-venda.dto';
import { UpdateVendaDto } from './dto/update-venda.dto';
export class VendaService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  async findAll() {
    return this.prisma.vendas.findMany();
  }
  async findOne(id: number) {
    return this.prisma.vendas.findUnique({
      where: { id },
    });
  }
  async create(data: CreateVendaDto) {
    return this.prisma.vendas.create({
      data,
    });
  }
  async update(id: number, data: UpdateVendaDto) {
    return this.prisma.vendas.update({
      where: { id },
      data,
    });
  }
  async remove(id: number) {
    return this.prisma.vendas.delete({
      where: { id },
    });
  }
}
