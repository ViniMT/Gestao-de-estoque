import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProdutoEntity } from '../entities/produto.entity';
import { CreateProdutoDto } from '../dto/create-produto.dto';
import { UpdateProdutoDto } from '../dto/update-produto.dto';
@Injectable()
export class ProdutoRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findAll(): Promise<ProdutoEntity[]> {
    const produtos = await this.prisma.produtos.findMany();
    return produtos.map(produto => ({
      ...produto,
      codigoBarra: produto.codigoBarras,
    }));
  }
  async findOne(id: number): Promise<ProdutoEntity> {
    const produtos = await this.prisma.produtos.findUnique({ where: { id } });
    if (!produtos) {
      throw new Error(`Id ${id} não encontrado`);
    }
    return {
      ...produtos,
      codigoBarra: produtos.codigoBarras,
    };
  }
  async create(objectCreate: CreateProdutoDto): Promise<ProdutoEntity> {
    const produto = await this.prisma.produtos.create({ data: objectCreate });
    return {
      ...produto,
      codigoBarra: produto.codigoBarras,
    };
  }
  async update(id: number, data: UpdateProdutoDto): Promise<ProdutoEntity> {
    const produto = await this.prisma.produtos.update({ where: { id }, data });
    return {
      ...produto,
      codigoBarra: produto.codigoBarras,
    };
  }
  async delete(id: number): Promise<ProdutoEntity> {
    const produto = await this.prisma.produtos.delete({ where: { id } });
    return {
      ...produto,
      codigoBarra: produto.codigoBarras,
    };
  }
}
