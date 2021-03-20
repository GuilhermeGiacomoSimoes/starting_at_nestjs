import { Injectable } from '@nestjs/common';
import { Cats } from './interfaces/cats.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cats[] = [];

  create(cat: Cats) {
    this.cats.push(cat);
  }

  findAll(): Cats[] {
    return this.cats;
  }
}
