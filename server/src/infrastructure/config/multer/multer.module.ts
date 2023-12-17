import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { storageConfig } from './multer.config';
@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage(storageConfig),
    }),
  ],
  exports: [MulterModule],
})
export class MulterStorageModule {}
