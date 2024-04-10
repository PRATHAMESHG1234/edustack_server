import * as mongoose from 'mongoose';

export const CourseSchema = new mongoose.Schema({
  title: String,
  startDate: String,
  endDate: String,
  imagePath: String,
});

export interface Course extends mongoose.Document {
  title: string;
  startDate: string;
  endDate: string;
  imagePath: string;
}
