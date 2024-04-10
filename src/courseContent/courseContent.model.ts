import * as mongoose from 'mongoose';

export const CourseContentSchema = new mongoose.Schema({
  courseId: mongoose.Schema.Types.ObjectId,
  title: String,
  description: String,
});

export interface CourseContent extends mongoose.Document {
  courseId: mongoose.Schema.Types.ObjectId;
  title: string;
  description: string;
}
