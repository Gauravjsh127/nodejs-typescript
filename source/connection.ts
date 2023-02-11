import pgPromise from 'pg-promise';
const pg = pgPromise({});
export const db = pg("postgres://brlremzh:MAqhCGoY4zpuNL1Qvikx1ITqmEPdirUS@salt.db.elephantsql.com:5432/brlremzh");