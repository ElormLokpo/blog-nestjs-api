import {
    Post,
    Get,
    Controller,
    Body,
    Param,
    Delete,
    Patch,
    UseGuards
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/jwtguard';
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

    @UseGuards(JwtGuard)
    @Post('add')
    async createBlog(
        @Body('main_heading') main_heading:string,
        @Body('author') author:string,
        @Body('main_img') main_img:string,
      
        @Body('description') description:string
    ){
        const blogData = await this.blogservice.createBlog(main_heading,author, main_img, description)
        return blogData;
    }

    @Get(':id')
    async getBlog(
        @Param('id') id:string
    ){
        const blogData = await this.blogservice.getBlog(id);
        return blogData;
    }

    @UseGuards(JwtGuard)
    @Patch(':id')
    async updateBlog(
        @Param('id') id:string,
        @Body('main_heading') main_heading:string,
        @Body('author') author:string,
        @Body('main_img') main_img:string,
        @Body('content') content: any[],
        @Body('description') description:string
    ){
        const blogData = await this.blogservice.updateBlog(id,main_heading,author, main_img, content, description)
        return blogData;
    }

    @UseGuards(JwtGuard)
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