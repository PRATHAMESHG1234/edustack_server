import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CourseContent, CourseContentSchema } from './courseContent.model';

@Injectable()
export class CourseContentService {
  constructor(
    @InjectModel('CourseContent')
    private readonly courseContentModel: Model<CourseContent>,
  ) {}

  async getCourseContentByCourseId(courseId: string): Promise<CourseContent[]> {
    return this.courseContentModel.find({ courseId }).exec();
  }

  async addCourseContent(courseContent: CourseContent): Promise<CourseContent> {
    const newCourseContent = new this.courseContentModel(courseContent);
    return newCourseContent.save();
  }
}
