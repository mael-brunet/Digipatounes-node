import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreateReservationsDto } from './dto/create-reservations.dto';
import { Reservations } from './interfaces/reservations.interface';

@Injectable()
export class ReservationsService {

  constructor(
    @Inject('RESERVATIONS_MODEL')
    private reservationsModel: Model<Reservations>,
  ) {}

  create(createReservationsDto: CreateReservationsDto) {
    const reservation = new this.reservationsModel(createReservationsDto);
    return reservation.save();
  }

  findById(id: string) {
    return this.reservationsModel.findById(id).exec();
  }

  remove(id: string) {
    return this.reservationsModel.findByIdAndDelete(id).exec();
  }

  async getCurrentReservations(id: string) {
    const currentHourParis = new Date().toLocaleString('en-US', {
      timeZone: 'Europe/Paris',
      hour: 'numeric',
      minute: 'numeric',
    });

    const [hour, minute] = currentHourParis.split(':').map(Number);

    const currentHourInMinutes = hour * 60 + minute;

    const reservations = await this.reservationsModel
      .find({
        heure_debut: { $lt: currentHourInMinutes },
        heure_fin: { $gt: currentHourInMinutes },
        id_utilisateur: id
      })
      .exec();

    return reservations;
  }

  async getPastReservations(id: string) {
    const reservations = await this.reservationsModel
      .find({
        id_utilisateur: id,
        date: { $lt: new Date() }
      })
      .exec();
  
    return reservations;
  }

}