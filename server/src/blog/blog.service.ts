import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BlogDTO  } from './blog.dto';

@Injectable()
export class BlogService{
    constructor( @InjectModel('BlogModel') private readonly blogmodel: Model<BlogDTO> ){}

    async createBlog(title: string, author:string, main_img:string, content: string[]){
        const blogData = await this.blogmodel.create({title, author, main_img, content});
        return blogData;
    }

    async getAllBlogs(){
        const blogData = await this.blogmodel.find();
        return blogData;
    }

    async getBlog(id:string){
        const blogData = await this.blogmodel.findById(id);
        return blogData;
    }

    async deleteBlog(id:string){
        const blogData = await this.blogmodel.findByIdAndDelete(id);
        return blogData;
    }
}