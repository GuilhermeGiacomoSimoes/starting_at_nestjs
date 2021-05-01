import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { ParseUUIDPipe, Param, ValidationPipe } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  //@Post()
  //async create(@Body() createCatDto: CreateCatDto) {
  //  this.catsService.create(createCatDto);
  //}

  @Get()
  async findAll() {
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      },
      HttpStatus.FORBIDDEN,
    );
  }

  @Get()
  async findOne(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    //TODO implements return ... this is example for validation parse parameter in router. In this case, is validation if parameter is a uuid
  }

  @Post()
  async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
}
