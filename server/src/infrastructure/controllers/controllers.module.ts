import { Module } from '@nestjs/common';
import { PageController } from './page/page.controller';
import { UsecasesProxyModule } from '../usecases-proxy/usecases-proxy.module';
import { MulterModule } from '@nestjs/platform-express';
import { MulterStorageModule } from '../config/multer/multer.module';

@Module({
  imports: [MulterStorageModule, UsecasesProxyModule.register()],
  controllers: [PageController],
})
export class ControllersModule {}
