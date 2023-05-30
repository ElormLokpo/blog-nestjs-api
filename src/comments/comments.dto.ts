import * as mongoose from 'mongoose';

export const CommentsSchema = new mongoose.Schema({
    author: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'UsersModel'
    },
    content:{
        type:String,
        required:true
    }
}, {timestamps:true});

export interface CommentDTO{
    author: any,
    content:string
}