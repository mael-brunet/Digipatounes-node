import * as mongoose from 'mongoose';

export const AnimauxSchema = new mongoose.Schema({
  id_utilisateur: {type:String, required: true},
  nom: {type:String, required: true},
  age: {type:Number, required: true},
  race: {type:String, required: true},
  sexe: {type:Boolean, required: true},
  poids: {type:String, required: true},
  is_castre: {type:Boolean, required: true},
  habitude: {type:String, required: true},
  comportement: {type:String, required: true},
});