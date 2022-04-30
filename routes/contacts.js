const express = require('express');
const routes = express.Router();


routes.get('/', (req, res) =>{

const MongoClient = require('mongodb').MongoClient;
   
const dotenv = require('dotenv');
dotenv.config()

const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.b8eds.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
MongoClient.connect(URI, function(err, db){
  if(err) throw err;
  let dbo = db.db("contacts");
  dbo.collection("contacts").find().toArray(function(err, result) {
    if(err) throw err;
    console.log(result);
    db.close();
  });
});
});

module.exports = routes;