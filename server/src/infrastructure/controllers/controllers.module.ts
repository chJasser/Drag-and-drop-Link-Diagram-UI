import { Module } from '@nestjs/common';
import { PageController } from './page/page.controller';
import { UsecasesProxyModule } from '../usecases-proxy/usecases-proxy.module';


@Module({
  imports: [UsecasesProxyModule.register()],
  controllers: [PageController],
})
export class ControllersModule {}
