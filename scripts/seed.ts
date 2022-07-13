import * as fs from 'fs';
import { randUser } from '@ngneat/falso';

const db: any = {};

const users = [...Array(25)].map(() => randUser());

db.users = users;

fs.writeFileSync('./generated/db.json', JSON.stringify(db));
