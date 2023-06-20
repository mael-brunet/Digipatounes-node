import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiTags,
} from '@nestjs/swagger';
import { ReservationsService } from './reservations.service';
import { CreateReservationsDto } from './dto/create-reservations.dto';

@ApiBearerAuth()
@ApiTags('reservations')
@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  create(@Body() createReservationsDto: CreateReservationsDto) {
    return this.reservationsService.create(createReservationsDto);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.reservationsService.findById(id);
  }

  @Get('/current/:id')
  findCurrent(@Param('id') user_id: string) {
    return this.reservationsService.getCurrentReservations(user_id);
  }

  @Get('/past/:id')
  findPast(@Param('id') user_id: string) {
    return this.reservationsService.getPastReservations(user_id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservationsService.remove(id);
  }
}