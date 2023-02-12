const Pool = require('pg').Pool;
//import * as dotenv from 'dotenv';
require('dotenv').config();

const pool = new Pool({
  user: 'postgres', //process.env.USERNAME
  password: 'Pazagi1704', //process.env.PASSWORD,
  host: 'localhost', //process.env.HOST,
  port: '5432', //process.env.DBPORT,
  database: 'todolist',
});

module.exports = pool;
