import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ListController } from 'src/controllers/lists.controller';
import { ListService } from 'src/services/lists.service';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'LIST_MICROSERVICE', transport: Transport.TCP },
    ]),
  ],
  controllers: [ListController],
  providers: [ListService],
})
export class ListModule {}
