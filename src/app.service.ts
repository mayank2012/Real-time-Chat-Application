/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class CatsService {
  // constructor(
  //   @Inject('CATS_REPOSITORY')
  //   private catsRepository: typeof ,
  // ) {}
// eslint-disable-next-line prettier/prettier

  // async findAll(): Promise<Cat[]> {
  //   return this.catsRepository.findAll<Cat>();
  // }
}
