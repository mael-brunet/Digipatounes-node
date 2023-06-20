import { Module } from '@nestjs/common';
import { AnimauxService } from './animaux.service';
import { AnimauxController } from './animaux.controller';
import { AnimauxProviders } from './animaux.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [AnimauxService,
    ...AnimauxProviders,],
  exports: [AnimauxService],
controllers: [AnimauxController],
imports: [DatabaseModule],
})
export class AnimauxModule {}
