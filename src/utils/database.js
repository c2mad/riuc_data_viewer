const pgp = require('pg-promise')();

const connectionString = 'postgresql://postgres:riouc@192.168.10.11:5432/riouc';

const db = pgp(connectionString);

module.exports = db;
