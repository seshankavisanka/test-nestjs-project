import { Controller, Get } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';

@Controller('book')
export class BookController {
    constructor(private bookServise: BookService) {}

    @Get()
    async getAllBooks(): Promise<Book[]> {
        return this.bookServise.findAll();
    }
}
