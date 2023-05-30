import * as mongoose from 'mongoose';

export const ContentSchema = new mongoose.Schema({
    type:{
        type: String,
        
    },
    pos:{
        type: Number
    },
    blog:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlogModel',
        
    },
    value: {
        type: String
    },
    
    
}, {timestamps: true});


export interface ContentDTO{
    type: string,
    pos: number, 
    blog: string,
    value: string,
   
 
 
}