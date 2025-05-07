import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateMateriaPrimaCompradaDto } from "../dto/create-materia-prima-comprada.dto";
import { UpdateMateriaPrimaCompradaDto } from "../dto/update-materia-prima-comprada.dto";
import { MateriaPrimaCompradaEntity } from "../entities/materia-prima-comprada.entity";
@Injectable()
export class MateriaPrimaCompradaRepository {
 constructor(private readonly prisma: PrismaService) {}
 async findAll(): Promise<MateriaPrimaCompradaEntity[]> {
 return this.prisma.materiasPrimasComprada.findMany();
 }
 async findOne(id: number): Promise<MateriaPrimaCompradaEntity> {
 const materiasPrimasComprada = await this.prisma.materiasPrimasComprada.findUnique({ where: { id } });
 if (!materiasPrimasComprada) {
 throw new Error(`Id ${id} não encontrado`);
 }
 return materiasPrimasComprada;
 }
 async create(objectCreate: CreateMateriaPrimaCompradaDto): Promise<MateriaPrimaCompradaEntity> {return this.prisma.materiasPrimasComprada.create({ data: objectCreate });
}
async update(id: number, data: UpdateMateriaPrimaCompradaDto): Promise<MateriaPrimaCompradaEntity> {
return this.prisma.materiasPrimasComprada.update({ where: { id }, data });
}
async delete(id: number): Promise<MateriaPrimaCompradaEntity> {
return this.prisma.materiasPrimasComprada.delete({ where: { id } });
}
}
