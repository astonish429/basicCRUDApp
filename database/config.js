const mysql = require('mysql');

require('dotenv/config');

const db = mysql.createConnection({
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PWD,
    database : process.env.DATABASE,
  });

 db.connect((err)=>{
     if(err) throw err;
     console.log(' db connected')
 })
 
 module.exports = db;