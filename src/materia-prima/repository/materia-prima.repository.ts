import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { MateriaPrimaEntity } from "../entities/materia-prima.entity";
import { CreateMateriaPrimaDto } from "../dto/create-materia-prima.dto";
import { UpdateMateriaPrimaDto } from "../dto/update-materia-prima.dto";
@Injectable()
export class MateriaprimaRepository {
 constructor(private readonly prisma: PrismaService) {}
 async findAll(): Promise<MateriaPrimaEntity[]> {
 return this.prisma.materiaprima.findMany();
 }
 async findOne(id: number): Promise<MateriaPrimaEntity> {
 const materiaprima = await this.prisma.materiaprima.findUnique({ where: { id } });
 if (!materiaprima) {
 throw new Error(`Id ${id} não encontrado`);
 }
 return materiaprima;
 }
 async create(objectCreate: CreateMateriaPrimaDto): Promise<MateriaPrimaEntity> {return this.prisma.materiaprima.create({ data: objectCreate });
}

async update(id: number, data: UpdateMateriaPrimaDto): Promise<MateriaPrimaEntity> {
return this.prisma.materiaprima.update({ where: { id }, data });
}
async delete(id: number): Promise<MateriaPrimaEntity> {
return this.prisma.materiaprima.delete({ where: { id } });
}
}
