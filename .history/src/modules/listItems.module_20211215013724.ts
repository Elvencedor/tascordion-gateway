import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ListItemController } from 'src/controllers/listItems.controller';
import { ListItemService } from 'src/services/listItems.service';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'LIST_ITEM_MICROSERVICE', transport: Transport.TCP },
    ]),
  ],
  controllers: [ListItemController],
  providers: [ListItemService],
})
export class ListItemModule {}
