import {
    Post,
    Get,
    Controller,
    Body,
    Param,
    Delete

} from '@nestjs/common';
import { BlogService } from "./blog.service";

@Controller('blog')
export class BlogController{
    constructor(private readonly blogservice: BlogService){}

    @Get()
    async getAllBlogs(){
        const blogData = await this.blogservice.getAllBlogs();
        return blogData;
    }

    @Post('add')
    async createBlog(
        @Body('title') title:string,
        @Body('author') author:string,
        @Body('main_img') main_img:string,
        @Body('content') content: string[]
    ){
        const blogData = await this.blogservice.createBlog(title,author, main_img, content)
        return blogData;
    }

    @Get(':id')
    async getBlog(
        @Param('id') id:string
    ){
        const blogData = await this.blogservice.getBlog(id);
        return blogData;
    }

    @Delete(':id')
    async deleteBlog(
        @Param('id') id:string
    ){
        const blogData = await this.blogservice.deleteBlog(id);
        return blogData;
    }

}