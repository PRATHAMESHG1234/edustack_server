import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TopicContent } from './topic-content.model';
import { TopicContentService } from './topic-content.service';

@Controller('topic-content')
export class TopicContentController {
  constructor(private readonly topicContentService: TopicContentService) {}

  @Get()
  async getAllTopicContents(
    @Param('topicId') topicId: string,
  ): Promise<TopicContent[]> {
    return this.topicContentService.getAllTopicContents(topicId);
  }

  @Post()
  async createTopicContent(
    @Body() topicContent: TopicContent,
  ): Promise<TopicContent> {
    return this.topicContentService.createTopicContent(topicContent);
  }
}
