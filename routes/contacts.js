const routes = require('express').Router();
const connectDB = require('../DB/connection')
const ObjectId = require('mongodb').ObjectId;

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

router.post('/', crud.createContact);

router.put('/:id', crud.updateContact);

router.delete('/:id', crud.deleteContact);

module.exports = routes;