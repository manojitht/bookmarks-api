import { Module } from '@nestjs/common';
import { TagModule } from './tags/tag.module';

@Module({
  imports: [TagModule],
})
export class AppModule {}
