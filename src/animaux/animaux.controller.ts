import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiTags,
} from '@nestjs/swagger';
import { AnimauxService } from './animaux.service';
import { CreateAnimauxDto } from './dto/create-animaux.dto';
import { UpdateAnimauxDto } from './dto/update-animaux.dto';

@ApiBearerAuth()
@ApiTags('animaux')
@Controller('animaux')
export class AnimauxController {
  constructor(private readonly animauxService: AnimauxService) {}

  @Post()
  create(@Body() createAnimauxDto: CreateAnimauxDto) {
    return this.animauxService.create(createAnimauxDto);
  }

  @Get(':id')
  findAllByUser(@Param('id') id: string) {
    return this.animauxService.findAllByUser(id);
  }

  @Get('profil/:id/')
  findById(@Param('id') id: string) {
    return this.animauxService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnimauxDto: UpdateAnimauxDto) {
    return this.animauxService.update(id, updateAnimauxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animauxService.remove(id);
  }
}
