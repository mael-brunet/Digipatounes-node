import * as mongoose from 'mongoose';

export const ReservationsSchema = new mongoose.Schema({
  id_utilisateur: {type:String, required: true},
  id_animal: {type:String, required: true},
  date: {type:String, required: true},
  heure_debut: {type:String, required: true},
  heure_fin: {type:String, required: true},
  prix: {type:Number, required: true},
});