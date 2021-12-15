import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ListService } from 'src/services/lists.service';

@Controller()
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Get()
  getHello(): string {
    return this.listService.getHello();
  }

  @Post('/create-list')
  createList(@Body() listDTO) {
    return this.listService.create(listDTO);
  }

  @Put('/update-list/:listId')
  updateListById(@Body() listDTO, @Param('listId') listId) {
    return this.listService.updateById(listDTO, listId);
  }

  @Delete('/delete-list/:listId')
  deleteListById(@Param('listId') listId) {
    return this.listService.deleteById(listId);
  }
}
