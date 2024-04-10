import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ghorpadeprathamesh2411:ghorpadeprathamesh2411@cluster0.75dbhef.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
  ],
})
export class DatabaseModule {}
