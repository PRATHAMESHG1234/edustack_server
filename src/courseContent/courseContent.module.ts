import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseContentController } from './courseContent.controller';
import { CourseContentService } from './courseContent.service';
import { CourseContentSchema } from './courseContent.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'CourseContent', schema: CourseContentSchema },
    ]),
  ],
  controllers: [CourseContentController],
  providers: [CourseContentService],
})
export class CourseContentModule {}
