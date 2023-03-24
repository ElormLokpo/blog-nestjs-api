import {
    Post,
    Get,
    Controller,
    Body,
    Param,
    Delete,
    Patch

} from '@nestjs/common';
import { BlogService } from "./blog.service";
//import { ContentService } from 'src/content/content.service';

@Controller('blog')
export class BlogController{
    constructor(
        private readonly blogservice: BlogService,
      // private readonly contentservice: ContentService
        ){}

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
        @Body('content') content: any[],
        @Body('description') description:string
    ){
        const blogData = await this.blogservice.createBlog(title,author, main_img, content, description)
        return blogData;
    }

    @Get(':id')
    async getBlog(
        @Param('id') id:string
    ){
        const blogData = await this.blogservice.getBlog(id);
        return blogData;
    }

    @Patch(':id')
    async updateBlog(
        @Param('id') id:string,
        @Body('title') title:string,
        @Body('author') author:string,
        @Body('main_img') main_img:string,
        @Body('content') content: any[],
        @Body('description') description:string
    ){
        const blogData = await this.blogservice.updateBlog(id,title,author, main_img, content, description)
        return blogData;
    }

    @Delete(':id')
    async deleteBlog(
        @Param('id') id:string
    ){
       // const blogData = await this.blogservice.getBlog(id, 'y');
        const blogDataDeleted = await this.blogservice.deleteBlog(id);
        // let currentContentBlog = [...blogData.content];

        // if(currentContentBlog.length >= 1 ){
        //     currentContentBlog.map(i=>{
        //         this.contentservice.deleteContent(i);
        //     })
        // }
     
        
        return blogDataDeleted;
    }

}