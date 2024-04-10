import { Controller, Get, Post, Body } from '@nestjs/common';
import { TopicContent } from './topic-content.model';
import { TopicContentService } from './topic-content.service';

@Controller('topic-content')
export class TopicContentController {
  constructor(private readonly topicContentService: TopicContentService) {}

  @Get()
  async getAllTopicContents(): Promise<TopicContent[]> {
    return this.topicContentService.getAllTopicContents();
  }

  @Post()
  async createTopicContent(
    @Body() topicContent: TopicContent,
  ): Promise<TopicContent> {
    return this.topicContentService.createTopicContent(topicContent);
  }
}
