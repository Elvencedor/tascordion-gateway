import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListItemModule } from './modules/listItems.module';
import { ListModule } from './modules/lists.module';

@Module({
  imports: [ListModule, ListItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
