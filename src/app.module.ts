import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsuarioModule } from './usuario/usuario.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { MateriaPrimaModule } from './materia-prima/materia-prima.module';
import { MateriaPrimaCompradaModule } from './materia-prima-comprada/materia-prima-comprada.module';
import { EstoqueItemModule } from './estoque-item/estoque-item.module';
import { ProdutoModule } from './produto/produto.module';
import { ClienteModule } from './cliente/cliente.module';
import { VendaModule } from './venda/venda.module';
import { ItemVendaModule } from './item-venda/item-venda.module';

@Module({
  imports: [PrismaModule, UsuarioModule, FornecedorModule, MateriaPrimaModule, MateriaPrimaModule, MateriaPrimaCompradaModule, EstoqueItemModule, ProdutoModule, ClienteModule, VendaModule, ItemVendaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
