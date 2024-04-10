import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TopicContentController } from './topic-content.controller';
import { TopicContentService } from './topic-content.service';
import { TopicContent, TopicContentSchema } from './topic-content.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'TopicContent', schema: TopicContentSchema },
    ]),
  ],
  controllers: [TopicContentController],
  providers: [TopicContentService],
})
export class TopicContentModule {}
