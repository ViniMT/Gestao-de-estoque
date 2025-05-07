import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EstoqueItemEntity } from '../entities/estoque-item.entity';
import { UpdateEstoqueItemDto } from '../dto/update-estoque-item.dto';
import { CreateEstoqueItemDto } from '../dto/create-estoque-item.dto';
@Injectable()
export class EstoqueItemRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findAll(): Promise<EstoqueItemEntity[]> {
    const items = await this.prisma.estoqueItens.findMany();
    return items.map(item => ({
      ...item,
      fornecedor: item.idFornecedor ? `Fornecedor ${item.idFornecedor}` : 'Fornecedor desconhecido',
    }));
  }
  async findOne(id: number): Promise<EstoqueItemEntity> {
    const estoqueItens = await this.prisma.estoqueItens.findUnique({ where: { id } });
    if (!estoqueItens) {
      throw new Error(`Id ${id} não encontrado`);
    }
    return {
      ...estoqueItens,
      fornecedor: estoqueItens.idFornecedor ? `Fornecedor ${estoqueItens.idFornecedor}` : 'Fornecedor desconhecido',
    };
  }
  async create(objectCreate: CreateEstoqueItemDto): Promise<EstoqueItemEntity> {
    const createdItem = await this.prisma.estoqueItens.create({
      data: {
        ...objectCreate,
        fornecedor: objectCreate.fornecedor
          ? { connect: { id: parseInt(objectCreate.fornecedor) } }
          : undefined,
      },
    });
    return {
      ...createdItem,
      fornecedor: createdItem.idFornecedor ? `Fornecedor ${createdItem.idFornecedor}` : 'Fornecedor desconhecido',
    };
  }
  async update(id: number, data: UpdateEstoqueItemDto): Promise<EstoqueItemEntity> {
    const updatedItem = await this.prisma.estoqueItens.update({
      where: { id },
      data: {
        ...data,
        fornecedor: data.fornecedor
          ? { connect: { id: parseInt(data.fornecedor) } }
          : undefined,
      },
    });
    return {
      ...updatedItem,
      fornecedor: updatedItem.idFornecedor ? `Fornecedor ${updatedItem.idFornecedor}` : 'Fornecedor desconhecido',
    };
  }
  async delete(id: number): Promise<EstoqueItemEntity> {
    const deletedItem = await this.prisma.estoqueItens.delete({ where: { id } });
    return {
      ...deletedItem,
      fornecedor: deletedItem.idFornecedor ? `Fornecedor ${deletedItem.idFornecedor}` : 'Fornecedor desconhecido',
    };
  }
}
