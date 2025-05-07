import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClienteEntity } from '../entities/cliente.entity';
import { CreateClienteDto } from '../dto/create-cliente.dto';
import { UpdateClienteDto } from '../dto/update-cliente.dto';

@Injectable()
export class ClienteRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<ClienteEntity[]> {
    const clientes = await this.prisma.clientes.findMany();
    return clientes.map(cliente => ({
      ...cliente,
      telefone: cliente.telefone.toString(), // Garantindo que telefone seja string
    }));
  }

  async findOne(id: number): Promise<ClienteEntity> {
    const cliente = await this.prisma.clientes.findUnique({ where: { id } });
    if (!cliente) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
    }
    return {
      ...cliente,
      telefone: cliente.telefone.toString(), // Garantindo consistência no retorno
    };
  }

  async create(objectCreate: CreateClienteDto): Promise<ClienteEntity> {
    const createdCliente = await this.prisma.clientes.create({
      data: {
        ...objectCreate,
        telefone: objectCreate.telefone.toString(), // Convertendo telefone para string
      },
    });
    return {
      ...createdCliente,
      telefone: createdCliente.telefone.toString(), // Garantindo consistência no retorno
    };
  }

  async update(id: number, data: UpdateClienteDto): Promise<ClienteEntity> {
    const updatedCliente = await this.prisma.clientes.update({
      where: { id },
      data: {
        ...data,
        telefone: data.telefone?.toString(), // Convertendo telefone para string, se fornecido
      },
    });
    return {
      ...updatedCliente,
      telefone: updatedCliente.telefone.toString(), // Garantindo consistência no retorno
    };
  }

  async delete(id: number): Promise<ClienteEntity> {
    const deletedCliente = await this.prisma.clientes.delete({ where: { id } });
    return {
      ...deletedCliente,
      telefone: deletedCliente.telefone.toString(), // Garantindo consistência no retorno
    };
  }
}
