import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

//DTO = data transfer object
export class BookDto {
  title: string;
  author: string;
  genre: string;
  price: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('book')
  async getBooks() {
    return await this.appService.getBooks()
  }

  @Get('book/:id')
  async getBookById(@Param('id') id: number) {
    return await this.appService.getBookById(id)
    }

  @Post('book')
  async createBook(@Body() book: BookDto) {
    return this.appService.createBook(book)
  }
  
  @Put('book/:id')
  async updateBook(@Body() book: BookDto, @Param('id') id: number) {
    return await this.appService.updateBook(id, book)
  }

  @Delete('book/:id')
  async deleteBook(@Param('id') id: number) {
    return await this.appService.deleteBook(id);
  }
}
