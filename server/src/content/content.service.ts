import {Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import { ContentDTO } from './content.dto';

@Injectable()
export class ContentService{
    constructor( @InjectModel('ContentModel') private readonly contentmodel:Model<ContentDTO>,){}

    async createContent(blogid:string, title: string, description:string, blog:string, sec_img:string, list:string[], link:string){
        const contentData = await this.contentmodel.create({title, description, blog, sec_img, list, link});
        return contentData;
    }

    async getAllContent(){
        const contentData = await this.contentmodel.find();
        return contentData;
    }

    async getContent(id:string){
        const contentData = await this.contentmodel.findById(id);
        return contentData;
    }

    async updateContent(id:string,title: string, description:string, blog:string, sec_img:string, list:string[], link:string){
        const contentData = await this.contentmodel.findByIdAndUpdate(id, {title, description, blog, sec_img, list, link}, {new:true});
        return contentData;
    }


    async deleteContent(id:string){
        const contentData = await this.contentmodel.findByIdAndDelete(id);
        return contentData;
    }
}