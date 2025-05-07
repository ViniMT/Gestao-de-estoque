import { PrismaClient } from '@prisma/client';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
export class ProdutoService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  async findAll() {
    return this.prisma.produtos.findMany();
  }
  async findOne(id: number) {
    return this.prisma.produtos.findUnique({
      where: { id },
    });
  }
  async create(data: CreateProdutoDto) {
    return this.prisma.produtos.create({
      data,
    });
  }
  async update(id: number, data: UpdateProdutoDto) {
    return this.prisma.produtos.update({
      where: { id },
      data,
    });
  }
  async remove(id: number) {
    return this.prisma.produtos.delete({
      where: { id },
    });
  }
}
