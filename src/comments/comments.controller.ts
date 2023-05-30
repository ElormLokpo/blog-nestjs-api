import {
    Post,
    Get,
    Controller,
    Body,
    Param,
    Delete,
    Patch } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController{
    constructor(
        private readonly commentservice:CommentsService,
         ){}

    @Get()
    async getAllComments(){
        const commentsData = await this.commentservice.getAllComments();
        return commentsData;
    }

    @Post('add')
    async createComment(
        @Body('author') author:string,
        @Body('content') content:string

    ){
        const commentsData = await this.commentservice.createComment(author, content);
        return commentsData;
    }

    

    @Patch(':id')
    async updateComment(
        @Param('id') id:string,
        @Body('author') author:string,
        @Body('content') content:string

    ){
        const commentsData = await this.commentservice.updateComment(id, author, content)
        return commentsData;
    }

    @Delete(':id')
    async deleteComment(
        @Param('id') id:string
    ){
        const commentsData = await this.commentservice.deleteComment(id);
        return commentsData;
    }
}

