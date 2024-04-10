import * as mongoose from 'mongoose';

export const TopicContentSchema = new mongoose.Schema({
  courseContentId: { type: mongoose.Schema.Types.ObjectId, required: true },
  point: { type: String, required: true },
  explanation: { type: String, required: true },
  code: { type: String, required: true },
});

export interface TopicContent extends mongoose.Document {
  courseContentId: mongoose.Schema.Types.ObjectId;
  point: string;
  explanation: string;
  code: string;
}
