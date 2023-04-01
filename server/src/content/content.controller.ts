import {
    Post,
    Get,
    Controller,
    Body,
    Param,
    Delete,
    Patch } from '@nestjs/common';
import { ContentService } from './content.service';
import { BlogService } from 'src/blog/blog.service';

@Controller('content')
export class ContentController{
    constructor(
        private readonly contentservice:ContentService,
        private readonly blogservice:BlogService
        ){}

    @Get()
    async getAllContents(){
        const contentData = await this.contentservice.getAllContent();
        return contentData;
    }

    @Post('add')
    async createContent(
        @Body('type') type:string,
        @Body('post') pos:number,
        @Body('blog') blog:string,
        
        @Body('blogid') value:string

    ){
        const contentData = await this.contentservice.createContent(type, pos, blog, value)
        const contentToBlog = await this.blogservice.addContentToBlog(contentData._id, contentData.blog)
        return contentData;
    }

    @Get(':id')
    async getBlog(
        @Param('id') id:string
    ){
        const contentData = await this.contentservice.getContent(id);
        return contentData;
    }

    @Patch(':id')
    async updateContent(
        @Param('id') id:string,
        @Body('type') type:string,
        @Body('post') pos:number,
        @Body('blog') blog:string,
        
        @Body('blogid') value:string
    ){
        const contentData = await this.contentservice.updateContent(id,type, pos, blog, value)
        return contentData;
    }

    @Delete(':id')
    async deleteContent(
        @Param('id') id:string
    ){
        const contentData = await this.contentservice.deleteContent(id);
        return contentData;
    }
}