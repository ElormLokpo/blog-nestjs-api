import * as mongoose from 'mongoose';
const bcrypt = require('bcrypt');

export const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    }
}, {timestamps:true});


UserSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});


export interface UserInterface{
    username:string,
    password:string
}

