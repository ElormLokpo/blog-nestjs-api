import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogSchema } from './blog.dto';
import { ContentModule } from 'src/content/content.module';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'BlogModel', schema: BlogSchema}]),
       
    ],
    controllers: [ BlogController ],
    providers: [ BlogService ],
    exports: [ BlogService ]
})
export class BlogModule{}