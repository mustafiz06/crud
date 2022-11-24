const { MongoClient } = require("mongodb");
require('dotenv').config()




//new Local computer client
//const client = new MongoClient(process.env.DATABASE_LOCAL);



//new atlas client
const client = new MongoClient(process.env.DATABASE);

console.log("Database Connected");

module.exports=(client)