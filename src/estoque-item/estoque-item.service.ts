import { PrismaClient } from '@prisma/client';
import { CreateEstoqueItemDto } from './dto/create-estoque-item.dto';
import { UpdateEstoqueItemDto } from './dto/update-estoque-item.dto';
export class EstoqueItemService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  async findAll() {
    return this.prisma.estoqueItens.findMany();
  }
  async findOne(id: number) {
    return this.prisma.estoqueItens.findUnique({
      where: { id },
    });
  }
  async create(data: CreateEstoqueItemDto) {
    return this.prisma.estoqueItens.create({
      data: {
        ...data,
        fornecedor: { connect: { id: Number(data.fornecedor) } },
      },
    });
  }
  async update(id: number, data: UpdateEstoqueItemDto) {
    return this.prisma.estoqueItens.update({
      where: { id },
      data: {
        ...data,
        fornecedor: data.fornecedor
          ? { connect: { id: Number(data.fornecedor) } }
          : undefined,
      },
    });
  }
  async remove(id: number) {
    return this.prisma.estoqueItens.delete({
      where: { id },
    });
  }
}
