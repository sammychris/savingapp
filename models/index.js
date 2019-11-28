const mysql = require('mysql2');
require('dotenv').config();


// create the connection to database
// const connection = mysql.createPool({
//   host: 'sql7.freemysqlhosting.net',
//   user: 'sql7307084',
//   password: 'zsPFMcrDr7',
//   port: '3306',
//   database: 'sql7307084',
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });

var knex = require('knex')({
  client: 'mysql2',
  connection: {
    host : '127.0.0.1',
    user : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
  },
  pool: { min: 0, max: 7 }
});




module.exports = knex;
