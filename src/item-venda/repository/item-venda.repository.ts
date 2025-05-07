import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ItemVendaEntity } from '../entities/item-venda.entity';
import { UpdateItemVendaDto } from '../dto/update-item-venda.dto';
import { CreateItemVendaDto } from '../dto/create-item-venda.dto';
@Injectable()
export class ItemVendaRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findAll(): Promise<ItemVendaEntity[]> {
    const itensVenda = await this.prisma.itensVenda.findMany();
    return itensVenda.map(item => ({
      ...item,
      idVenda: item.vendaId,
      idProduto: item.produtoId,
    }));
  }
  async findOne(id: number): Promise<ItemVendaEntity> {
    const itensVenda = await this.prisma.itensVenda.findUnique({ where: { id } });
    if (!itensVenda) {
      throw new Error(`Id ${id} não encontrado`);
    }
    return {
      ...itensVenda,
      idVenda: itensVenda.vendaId,
      idProduto: itensVenda.produtoId,
    };
  }
  async create(objectCreate: CreateItemVendaDto): Promise<ItemVendaEntity> {
    const createdItem = await this.prisma.itensVenda.create({ 
      data: {
        ...objectCreate,
        venda: { connect: { id: objectCreate.idVenda } },
        produto: { connect: { id: objectCreate.idProduto } },
      },
    });
    return {
      ...createdItem,
      idVenda: createdItem.vendaId,
      idProduto: createdItem.produtoId,
    };
  }
  async update(id: number, data: UpdateItemVendaDto): Promise<ItemVendaEntity> {
    const updatedItem = await this.prisma.itensVenda.update({ where: { id }, data });
    return {
      ...updatedItem,
      idVenda: updatedItem.vendaId,
      idProduto: updatedItem.produtoId,
    };
  }
  async delete(id: number): Promise<ItemVendaEntity> {
    const deletedItem = await this.prisma.itensVenda.delete({ where: { id } });
    return {
      ...deletedItem,
      idVenda: deletedItem.vendaId,
      idProduto: deletedItem.produtoId,
    };
  }
}
