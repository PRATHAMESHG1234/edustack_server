import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TopicContent } from './topic-content.model';

@Injectable()
export class TopicContentService {
  constructor(
    @InjectModel('TopicContent')
    private readonly topicContentModel: Model<TopicContent>,
  ) {}

  async getAllTopicContents(): Promise<TopicContent[]> {
    return this.topicContentModel.find().exec();
  }

  async createTopicContent(topicContent: TopicContent): Promise<TopicContent> {
    const newTopicContent = new this.topicContentModel(topicContent);
    return newTopicContent.save();
  }
}
