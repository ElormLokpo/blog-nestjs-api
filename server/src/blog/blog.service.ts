import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BlogDTO  } from './blog.dto';

@Injectable()
export class BlogService{
    constructor( @InjectModel('BlogModel') private readonly blogmodel: Model<BlogDTO> ){}

    async createBlog(main_heading: string, author:string, main_img:string, description:string){
        const blogData = await this.blogmodel.create({main_heading, author, main_img, content:[], description});
        return blogData;
    }

    async getAllBlogs(){
        const blogData = await this.blogmodel.find().populate('content');
        return blogData;
    }

    async getBlog(id:string,typeOne?:string){
        let blogData;

        blogData = await (await this.blogmodel.findById(id)).populate('content');
        
        if (typeOne == 'y'){
            blogData = await this.blogmodel.findById(id);
        }
        return blogData;
    }

    async updateBlog(id:string,main_heading: string, author:string, main_img:string, content: any[], description:string){
        const blogData = await this.blogmodel.findByIdAndUpdate(id, {main_heading, author, main_img, content, description}, {new:true});
        return blogData;
    }


    async deleteBlog(id:string){
        const blogData = await this.blogmodel.findByIdAndDelete(id);
        return blogData;
    }
    
    async addContentToBlog(contetnid:any, blogid:any){
        const blogData = await this.blogmodel.findById(blogid);

      

        let currentContent = [...blogData.content];
        currentContent.push(contetnid);

        const updatedBlog = await this.blogmodel.findByIdAndUpdate(blogid, {content: currentContent}, {new:true})
        return updatedBlog;
    }
}