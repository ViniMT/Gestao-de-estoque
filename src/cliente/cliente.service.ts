import { PrismaClient } from '@prisma/client';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { CreateClienteDto } from './dto/create-cliente.dto';
export class ClienteService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  async findAll() {
    return this.prisma.clientes.findMany();
  }
  async findOne(id: number) {
    return this.prisma.clientes.findUnique({
      where: { id },
    });
  }
  async create(data: CreateClienteDto) {
    return this.prisma.clientes.create({
      data,
    });
  }
  async update(id: number, data: UpdateClienteDto) {
    return this.prisma.clientes.update({
      where: { id },
      data,
    });
  }
  async remove(id: number) {
    return this.prisma.clientes.delete({
      where: { id },
    });
  }
}
