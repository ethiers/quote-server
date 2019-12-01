import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import {QuotesModule} from './quotes/quotes.module';

@Module({
    imports: [MongooseModule.forRoot(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }), QuotesModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
