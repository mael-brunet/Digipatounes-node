import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreateAnimauxDto } from './dto/create-animaux.dto';
import { UpdateAnimauxDto } from './dto/update-animaux.dto';
import { Animaux } from './interfaces/animaux.interface';

@Injectable()
export class AnimauxService {

  constructor(
    @Inject('ANIMAUX_MODEL')
    private animauxModel: Model<Animaux>,
  ) {}

  create(createAnimauxDto: CreateAnimauxDto) {
    const animal = new this.animauxModel(createAnimauxDto);
    return animal.save();
  }

  findAllByUser(id: string) {
    return this.animauxModel.find({id_utilisateur: id}).exec();
  }

  findById(id: string) {
    return this.animauxModel.findById(id).exec();
  }

  update(id: string, updateAnimauxDto: UpdateAnimauxDto) {
    return this.animauxModel.findByIdAndUpdate(id, updateAnimauxDto, { new: true });
  }

  remove(id: string) {
    return this.animauxModel.findByIdAndDelete(id).exec();
  }
}
