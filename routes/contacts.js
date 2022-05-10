const routes = require('express').Router();
const connectDB = require('../DB/connection');
const ObjectId = require('mongodb').ObjectId;
const crud = require('./crud');
const bodyParser = require('body-parser');

routes.use(bodyParser.json());

routes.get('/', (req, res) =>{

    const results = connectDB.getCollection("contacts").find();

    results.toArray().then((documents) => {
        res.status(200).json(documents);
        console.log("Returned All Contacts")
    });
   
});
routes.get('/:id', (req, res) =>{

    const contactId = new ObjectId(req.params.id);
    const results = connectDB.getCollection("contacts").find({_id: contactId});

    results.toArray().then((documents) => {
        res.status(200).json(documents[0]);
        console.log(`Returned Single Contact ${req.params.id}`)
    });
   
});

routes.post('/', crud.createContact);

routes.put('/:id', crud.updateContact);

routes.delete('/:id', crud.deleteContact);

module.exports = routes;