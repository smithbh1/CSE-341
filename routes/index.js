const routes = require('express').Router();

routes.get('/', (req, res) =>{
    res.send('Josh Dart')
});

routes.use('/contacts', require('./contacts'));

module.exports = routes;