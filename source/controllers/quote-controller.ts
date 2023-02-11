import {Request, Response} from 'express';
import * as countryService from '../services/quote-service'

const getQuotes = async (req: Request, res: Response) => {
    countryService.getQuotes().then(
        (Quotes) => {
            res.send(Quotes);
        }
    )
};

export default {getQuotes}