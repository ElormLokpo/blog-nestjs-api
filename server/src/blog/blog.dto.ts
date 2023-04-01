import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema({
    main_heading:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    author:{
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'UsersModel'
        type: String
    },
    main_img:{
        type: String,
        default:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    },
    content:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ContentModel'
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CommentsModel'
    }]
}, {timestamps: true});


export interface BlogDTO{
    main_heading: string,
    author?: string,
    main_img?: string,
    content?: any[],
    comments?: any[],
    description?: string
}