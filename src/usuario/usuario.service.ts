import { PrismaClient } from '@prisma/client';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export class UsuarioService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  async findAll() {
    return this.prisma.usuarios.findMany();
  }
  async findOne(id: number) {
    return this.prisma.usuarios.findUnique({
      where: { id },
    });
  }
  async create(data: CreateUsuarioDto) {
    return this.prisma.usuarios.create({
      data,
    });
  }
  async update(id: number, data: UpdateUsuarioDto) {
    return this.prisma.usuarios.update({
      where: { id },
      data,
    });
  }
  async remove(id: number) {
    return this.prisma.usuarios.delete({
      where: { id },
    });
  }
}
