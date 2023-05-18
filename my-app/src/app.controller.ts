import { Controller, Get, Inject, UseInterceptors } from '@nestjs/common';
import { CACHE_MANAGER, CacheInterceptor } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { AppService } from './app.service';
import {Profile} from "./schemas/models/Profile";

@UseInterceptors(CacheInterceptor) //For Auto-caching
@Controller()
export class AppController {

//CODE FOR AUTO-CACHING

fakeValue = "Wow this is a temporary cache";

@Get('auto-cache')
getCache(){
  return this.fakeValue;
}




//CODE FOR MANUAL CACHING

//   fakeValue = "This is a temporary cache";


//   constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  
//  @Get('get-string-cache') 
//  async getSimpleString(){
  
//   const value = await this.cacheManager.get('simplestring');

//   if(value){
//     return {
//       data: value,
//       loadsFrom: "redis cache"
//     }
//   }

//   await this.cacheManager.set('simplestring',this.fakeValue);

//   return{
//     data:this.fakeValue,
//     loadsFrom: "Dummy Database"
//   }

//  }

// @Get('delete')
// async deleteCache() {
// await this.cacheManager.del('simplestring');
// }


//  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
