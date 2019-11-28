const mysql = require('mysql2');


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
    user : 'sammy',
    password : 'ebusam12',
    database : 'sammy_test'
  },
  pool: { min: 0, max: 7 }
});




module.exports = knex;
