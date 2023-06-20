import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  firstname: {type:String, required: true},
  lastname: {type:String, required: true},
  adresse: {type:String, required: true},
  email: {type:String, unique:true, required: true},
  phone: {type:String, unique:true, required: true},
  password: {type:String, required: true},
});