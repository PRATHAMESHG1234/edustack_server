import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './database/database.module';
import { CourseSchema } from './courses/course.model';
import { CourseContentSchema } from './courseContent/courseContent.model';
import { CoursesModule } from './courses/courses.module';
import { CourseContentModule } from './courseContent/courseContent.module';
import { TopicContentModule } from './topic-content/topic-content.module';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: 'Course', schema: CourseSchema }]),
    MongooseModule.forFeature([
      { name: 'CourseContent', schema: CourseContentSchema },
    ]),
    CoursesModule,
    CourseContentModule,
    TopicContentModule,
  ],
})
export class AppModule {}
