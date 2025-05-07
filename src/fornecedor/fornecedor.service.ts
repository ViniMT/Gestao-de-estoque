import { PrismaClient } from '@prisma/client';
import { CreateFornecedorDto } from './dto/create-fornecedor.dto';
import { UpdateFornecedorDto } from './dto/update-fornecedor.dto';
export class FornecedorService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  async findAll() {
    return this.prisma.fornecedores.findMany();
  }

  async findOne(id: number) {
    return this.prisma.fornecedores.findUnique({
      where: { id },
    });
  }
  async create(data: CreateFornecedorDto) {
    return this.prisma.fornecedores.create({
      data,
    });
  }

  async update(id: number, data: UpdateFornecedorDto) {
    return this.prisma.fornecedores.update({
      where: { id },
      data,
    });
  }
  async remove(id: number) {
    return this.prisma.fornecedores.delete({
      where: { id },
    });
  }
}
