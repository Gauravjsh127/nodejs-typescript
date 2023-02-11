import {db} from '../connection'

export const getQuotes = async () => {
    return await db.query('SELECT * FROM quote')
}