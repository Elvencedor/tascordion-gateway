import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ListItemService {
  constructor(
    @Inject('LIST_ITEM_MICROSERVICE') private readonly client: ClientProxy,
  ) {}

  create(listItemDTO) {
    return this.client.send({ role: 'item', cmd: 'create-item' }, listItemDTO);
  }

  updateById(payload, itemId: string) {
    return this.client.send(
      { role: 'item', cmd: 'update-item' },
      { payload, itemId },
    );
  }

  deleteById(itemId: string) {
    return this.client.send({ role: 'item', cmd: 'delete-item' }, itemId);
  }
}
