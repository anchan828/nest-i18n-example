import { I18nextModule } from '@anchan828/nest-i18n-i18next';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    I18nextModule.register({
      fallbackLng: ['en'],
      resources: {
        en: {
          translation: { test: 'Test' },
        },
        jp: {
          translation: { test: 'テスト' },
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
