import {Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import { ContentDTO } from './content.dto';

@Injectable()
export class ContentService{
    constructor( @InjectModel('ContentModel') private readonly contentmodel:Model<ContentDTO>,){}

    async createContent(type: string, pos:number, blog:string, value:string){
        const contentData = await this.contentmodel.create({type, pos, blog, value});
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

    async updateContent(id:string,type: string, pos:number, blog:string, value:string){
        const contentData = await this.contentmodel.findByIdAndUpdate(id, {type, pos, blog, value}, {new:true});
        return contentData;
    }


    async deleteContent(id:string){
        const contentData = await this.contentmodel.findByIdAndDelete(id);
        return contentData;
    }
}