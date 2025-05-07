import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFornecedorDto } from '../dto/create-fornecedor.dto';
import { UpdateFornecedorDto } from '../dto/update-fornecedor.dto';
import { FornecedorEntity } from '../entities/fornecedor.entity';
@Injectable()
export class FornecedorRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findAll(): Promise<FornecedorEntity[]> {
    return this.prisma.fornecedor.findMany();
  }
  async findOne(id: number): Promise<FornecedorEntity> {
    const fornecedor = await this.prisma.fornecedor.findUnique({ where: { id } });
    if (!fornecedor) {
      throw new Error(`Id ${id} não encontrado`);
    }
    return fornecedor;
  }
  async create(objectCreate: CreateFornecedorDto): Promise<FornecedorEntity> {
    return this.prisma.fornecedor.create({ data: objectCreate });
  }
  async update(id: number, data: UpdateFornecedorDto): Promise<FornecedorEntity> {
    return this.prisma.fornecedor.update({ where: { id }, data });
  }
  async delete(id: number): Promise<FornecedorEntity> {
    return this.prisma.fornecedor.delete({ where: { id } });
  }
}
