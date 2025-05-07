import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { UsuarioEntity } from "../entities/usuario.entity";
import { CreateUsuarioDto } from "../dto/create-usuario.dto";
import { UpdateUsuarioDto } from "../dto/update-usuario.dto";
@Injectable()
export class UsuarioRepository {
 constructor(private readonly prisma: PrismaService) {}
 async findAll(): Promise<UsuarioEntity[]> {
 return this.prisma.usuario.findMany();
 }
 async findOne(id: number): Promise<UsuarioEntity> {
 const usuario = await this.prisma.usuario.findUnique({ where: { id } });
 if (!usuario) {
 throw new Error(`Id ${id} não encontrado`);
 }
 return usuario;
 }
 async create(objectCreate: CreateUsuarioDto): Promise<UsuarioEntity> {return this.prisma.usuario.create({ data: objectCreate });
}
async update(id: number, data: UpdateUsuarioDto): Promise<UsuarioEntity> {
return this.prisma.usuario.update({ where: { id }, data });
}
async delete(id: number): Promise<UsuarioEntity> {
return this.prisma.usuario.delete({ where: { id } });
}
}
