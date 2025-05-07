import { Module } from '@nestjs/common';
import { EstoqueItemService } from './estoque-item.service';
import { EstoqueItemController } from './estoque-item.controller';

@Module({
  controllers: [EstoqueItemController],
  providers: [EstoqueItemService],
})
export class EstoqueItemModule {}
