import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from './dto';

@Controller('cats')
export class CatsController {
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds new cat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get('ab*cd')
  findAllAbCd(): string {
    return 'This requestion contains character wildcard';
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a ${params.id} cat`;
  }

  @Get('/byid/:id')
  findById(@Param('id') id: string): string {
    return `This action returns a ${id} cat`;
  }

  @Get('/observable/returnObservable')
  findAllObservable(): Observable<any[]> {
    return of(['parameterone', 'parametertwo']);
  }

  @Get('/promise/returnPromise')
  async findAllPromise(): Promise<any[]> {
    return ['parameterone', 'parametertwo'];
  }
}
