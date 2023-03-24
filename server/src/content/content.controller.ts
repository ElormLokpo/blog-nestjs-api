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
        @Body('title') title:string,
        @Body('description') description:string,
        @Body('blog') blog:string,
        @Body('sec_img') sec_img:string,
        @Body('list') list:string[],
        @Body('link') link:string,
        @Body('blogid') blogid:string

    ){
        const contentData = await this.contentservice.createContent(blogid, title, description, blog, sec_img, list, link)
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
        @Body('title') title:string,
        @Body('description') description:string,
        @Body('blog') blog:string,
        @Body('sec_img') sec_img:string,
        @Body('list') list:string[],
        @Body('link') link:string
    ){
        const contentData = await this.contentservice.updateContent(id,title, description, blog, sec_img, list, link)
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