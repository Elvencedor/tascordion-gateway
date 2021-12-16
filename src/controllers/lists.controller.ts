import { Controller, Get, Inject, OnModuleInit, Post } from '@nestjs/common';
import { ClientGrpc, GrpcMethod } from '@nestjs/microservices';
import { ListServiceClient } from 'src/interfaces/lists.interface';

@Controller('lists')
export class ListController implements OnModuleInit {
  private listService: ListServiceClient;
  constructor(@Inject('LIST_MICROSERVICE') private client: ClientGrpc) {}

  onModuleInit() {
    this.listService =
      this.client.getService<ListServiceClient>('ListProtoService');
  }

  @Get()
  getHello(): string {
    return 'HELLO SOMEBODY!';
  }

  @Post('create')
  createList(listDTO: { title: string }) {
    console.log(listDTO);
    return this.listService.createList(listDTO).toPromise();
  }

  @GrpcMethod('ListProtoService', 'updateListById')
  updateListById(listDTO: { title: string }, listId: string) {
    return this.listService.updateListById(listDTO, listId).toPromise();
  }

  @GrpcMethod('ListProtoService', 'deleteListById')
  deleteListById(listId: string) {
    return this.listService.deleteListById(listId).toPromise();
  }
}
