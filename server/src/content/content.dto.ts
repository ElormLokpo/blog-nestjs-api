import * as mongoose from 'mongoose';

export const ContentSchema = new mongoose.Schema({
    title:{
        type: String,
        
    },
    description:{
        type: String
    },
    blog:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlogModel',
        required:true
    },
    sec_img:{
        type: String,
        
    },
    list:[{
        type: String
    }],
    link:{
        type:String
    }
    
}, {timestamps: true});


export interface ContentDTO{
    title: string,
    description?:string,
    blog: string,
    sec_img: string,
    list: string[],
    link: string
 
}