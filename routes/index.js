const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) =>{
    res.send('Josh Dart')
});
routes.use('/contacts', require('./contacts'));
module.exports = routes;