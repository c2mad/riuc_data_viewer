const pgp = require('pg-promise')();

const connectionString = 'postgresql://postgres:admin@localhost:5432/RIOUC';

const db = pgp(connectionString);

module.exports = db;
