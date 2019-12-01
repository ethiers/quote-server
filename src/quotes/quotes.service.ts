import {Injectable} from '@nestjs/common';
import {Quote} from './interfaces/quote.interface';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';

@Injectable()
export class QuotesService {

    constructor(
        @InjectModel('Quote') private readonly quoteModel: Model<Quote>) {

    }

    async getQuotes(): Promise<Quote[]> {
        return await this.quoteModel.find().exec();
    }

    async getQuote(id: string): Promise<Quote> {
        return await this.quoteModel.findById(id).exec();
    }

    async createQuote(quote: Quote): Promise<Quote> {
        const newQuote = await new this.quoteModel(quote);
        return newQuote.save();
    }

    async updateQuote(id: string, updateQuoteDto): Promise<Quote> {
        return this.quoteModel.findByIdAndUpdate(id, updateQuoteDto, {new: true});

        // const data = this.quotes.find(quote => quote.id === id);
        // data.title = updateQuoteDto.title ? updateQuoteDto.title : data.title;
        // data.author = updateQuoteDto.author ? updateQuoteDto.author : data.author;
        // return data;
    }

    async deleteQuote(id: string): Promise<Quote> {
        return await this.quoteModel.findByIdAndRemove(id);

        // return this.quotes.find(quote => quote.id === id);
    }

}
