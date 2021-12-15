import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ListItemService } from 'src/services/listItems.service';

@Controller()
export class ListItemController {
  constructor(private readonly listItemService: ListItemService) {}

  @Get()
  getHello(): string {
    return this.listItemService.getHello();
  }

  @Post('/create-item')
  createList(@Body() listItemDTO) {
    return this.listItemService.create(listItemDTO);
  }

  @Put('/update-item/:ItemId')
  updateListById(@Body() listItemDTO, @Param('ItemId') ItemId) {
    return this.listItemService.updateById(listItemDTO, ItemId);
  }

  @Delete('/delete-item/:ItemId')
  deleteListById(@Param('ItemId') ItemId) {
    return this.listItemService.deleteById(ItemId);
  }
}
