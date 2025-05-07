import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { VendaEntity } from "../entities/venda.entity";
import { CreateVendaDto } from "../dto/create-venda.dto";
import { UpdateVendaDto } from "../dto/update-venda.dto";
@Injectable()
export class VendaRepository {
 constructor(private readonly prisma: PrismaService) {}
 async findAll(): Promise<VendaEntity[]> {
 return this.prisma.vendas.findMany();
 }
 async findOne(id: number): Promise<VendaEntity> {
 const vendas = await this.prisma.vendas.findUnique({ where: { id } });
 if (!vendas) {
 throw new Error(`Id ${id} não encontrado`);
 }
 return vendas;
 }
 async create(objectCreate: CreateVendaDto): Promise<VendaEntity> {return this.prisma.vendas.create({ data: objectCreate });
}
async update(id: number, data: UpdateVendaDto): Promise<VendaEntity> {
const { idUsuario, ...rest } = data;
return this.prisma.vendas.update({ where: { id }, data: rest });
}
async delete(id: number): Promise<VendaEntity> {
return this.prisma.vendas.delete({ where: { id } });
}
}
