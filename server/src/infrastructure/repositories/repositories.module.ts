import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigModule } from '../config/typeorm/typeorm.module';
import { DatabasePageRepository } from './page.repository';
import { Page } from '../entities/page.entity';

@Module({
  imports: [TypeOrmConfigModule, TypeOrmModule.forFeature([Page])],
  providers: [DatabasePageRepository],
  exports: [DatabasePageRepository],
})
export class RepositoriesModule {}
