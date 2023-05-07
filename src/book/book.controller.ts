import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book-dto';

@Controller('books')
export class BookController {
    constructor(private bookServise: BookService) {}

    @Get()
    async getAllBooks(): Promise<Book[]> {
        return this.bookServise.findAll();
    }

    @Post()
    async createBook(
        @Body()
        book: CreateBookDto,
    ): Promise<Book> {
        return this.bookServise.create(book)
    }

    @Get(':id')
    async getBook(
        @Param('id')
        id: string
    ): Promise<Book> {
        return this.bookServise.findById(id);
    }
}