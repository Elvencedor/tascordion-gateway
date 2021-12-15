import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ListService {
  constructor(
    @Inject('LIST_MICROSERVICE') private readonly client: ClientProxy,
  ) {}

  getHello() {
    return 'HELLO WORLD!';
  }

  createList(listsDTO) {
    return this.client.send({ role: 'list', cmd: 'create-list' }, listsDTO);
  }

  updateById(payload, listId: string) {
    return this.client.send(
      { role: 'list', cmd: 'update-list' },
      { payload, listId },
    );
  }

  deleteById(listId: string) {
    return this.client.send({ role: 'list', cmd: 'delete-list' }, listId);
  }
}
