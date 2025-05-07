import { PrismaClient } from '@prisma/client';
import { CreateItemVendaDto } from './dto/create-item-venda.dto';
import { UpdateItemVendaDto } from './dto/update-item-venda.dto';
export class ItemVendaService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  async findAll() {
    return this.prisma.itensVenda.findMany();
  }
  async findOne(id: number) {
    return this.prisma.itensVenda.findUnique({
      where: { id },
    });
  }
  async create(data: CreateItemVendaDto) {
    return this.prisma.itensVenda.create({
      data: {
        ...data,
        venda: { connect: { id: data.idVenda } }, // Ensure 'venda' is provided
        produto: { connect: { id: data.idProduto } }, // Ensure 'produto' is properly connected
      },
    });
  }
  async update(id: number, data: UpdateItemVendaDto) {
    return this.prisma.itensVenda.update({
      where: { id },
      data,
    });
  }
  async remove(id: number) {
    return this.prisma.itensVenda.delete({
      where: { id },
    });
  }
}
