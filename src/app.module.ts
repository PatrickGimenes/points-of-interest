import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { PointsModule } from './points/points.module';
import { AppController } from './app.controller';

@Module({
  imports: [PointsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
