import {Injectable} from '@nestjs/common'; 
import { CommentDTO } from './comments.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CommentsService{
    constructor(
        @InjectModel('CommentsModel') private readonly commentsmodel: Model<CommentDTO>
    ){}


    async createComment(author: string, content:string){
        const commentsData = await this.commentsmodel.create({author, content});
        return commentsData;
    }

    async getAllComments(){
        const commentsData = await this.commentsmodel.find().populate('author');
        return commentsData;
    }

   

    async updateComment(id:string,author: string, content:string){
        const commentsData = await this.commentsmodel.findByIdAndUpdate(id, {author, content}, {new:true});
        return commentsData;
    }


    async deleteComment(id:string){
        const commentsData = await this.commentsmodel.findByIdAndDelete(id);
        return commentsData;
    }
    
}