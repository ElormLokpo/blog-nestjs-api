import { Module } from '@nestjs/common';
import { ContentController } from './content.controller';
import { ContentService } from './content.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ContentSchema } from './content.dto';
import { BlogModule } from 'src/blog/blog.module';

@Module({
    imports:[
        MongooseModule.forFeature([{name: 'ContentModel', schema: ContentSchema}]),
        BlogModule
    ],
    controllers:[ContentController],
    providers: [ContentService],
    exports: [ContentService]
})
export class ContentModule{}