const routes = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');


routes.get('/api-docs', swaggerUi.setup(swaggerDocument));
routes.get('/', (req, res) =>{
    res.send('Josh Dart')
});
routes.use('/api-docs', swaggerUi.serve);
routes.use('/contacts', require('./contacts'));

module.exports = routes;