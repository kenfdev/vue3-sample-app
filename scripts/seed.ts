import * as fs from 'fs';
import { randUser } from '@ngneat/falso';
import currencies from './data/currencies.json';

const db: any = {};

const users = [...Array(25)].map(() => randUser());

db.users = users;
db.currencies = currencies;

fs.writeFileSync('./generated/db.json', JSON.stringify(db));
