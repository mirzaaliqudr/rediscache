import { Module} from '@nestjs/common';
import type {RedisClientOptions} from "redis";
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import  {redisStore} from "cache-manager-redis-store"
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [CacheModule.register<RedisClientOptions>({
    //@ts-ignore
    store:async () => await redisStore({
      // Store-specific configuration:
      socket: {
        host: 'localhost',
        port: 6379,
        
      }
      })
  }),
],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR, //For Auto-caching
      useClass: CacheInterceptor //For Auto-caching
    },
    AppService],
})
export class AppModule {}
