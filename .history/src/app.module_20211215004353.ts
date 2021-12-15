import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListController } from './controllers/lists.controller';
import { ListService } from './services/lists.service';

@Module({
  imports: [],
  controllers: [AppController, ListController],
  providers: [AppService, ListService],
})
export class AppModule {}
