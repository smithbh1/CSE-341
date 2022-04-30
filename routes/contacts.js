const express = require('express');
const routes = express.Router();
const connectDB = require('../DB/connection')


routes.get('/', (req, res) =>{

    connectDB.getCollection("contacts").find().toArray((err, result) => {
        if(err) throw err;
        res.json(result);
        console.log('Contacts Query Successful')
    });
});


module.exports = routes;