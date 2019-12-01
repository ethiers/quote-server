import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {QuotesService} from './quotes.service';
import {CreateQuoteDto} from './dto/create-quote.dto';
import {Quote} from './interfaces/quote.interface';
import {ApiImplicitParam, ApiUseTags} from '@nestjs/swagger';

@ApiUseTags('quotes')
@Controller('quotes')
export class QuotesController {

    constructor(private quotesService: QuotesService) {
    }

    @Get()
    getQuotes(): Promise<Quote[]> {
        return this.quotesService.getQuotes();
    }

    @ApiImplicitParam({name: 'id'})
    @Get(':id')
    getQuote(@Param('id') id: string): Promise<Quote> {
        return this.quotesService.getQuote(id);
    }

    @Post()
    createQuote(@Body() createQuoteDto: CreateQuoteDto): Promise<Quote> {
        return this.quotesService.createQuote(createQuoteDto);
    }

    @ApiImplicitParam({name: 'id'})
    @Put(':id')
    updateQuote(@Param('id') id: string, @Body() updateQuoteDto: CreateQuoteDto): Promise<Quote> {
        return this.quotesService.updateQuote(id, updateQuoteDto);
    }

    @ApiImplicitParam({name: 'id'})
    @Delete(':id')
    deleteQuote(@Param('id') id: string) {
        return this.quotesService.deleteQuote(id);
    }
}
