import { Field, InputType } from '@nestjs/graphql';
import { ListItemDTO } from './listItems.dto';

@InputType()
export class ListsDTO {
  @Field()
  title: string;
  @Field((type) => [ListItemDTO])
  listItems: ListItemDTO[];
}
