import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CourseContentService } from './courseContent.service';
import { CourseContent } from './courseContent.model';

@Controller('course-content')
export class CourseContentController {
  constructor(private readonly courseContentService: CourseContentService) {}

  @Get(':courseId')
  async getCourseContentByCourseId(
    @Param('courseId') courseId: string,
  ): Promise<CourseContent[]> {
    return this.courseContentService.getCourseContentByCourseId(courseId);
  }

  @Post()
  async addCourseContent(
    @Body() courseContent: CourseContent,
  ): Promise<CourseContent> {
    return this.courseContentService.addCourseContent(courseContent);
  }
}
