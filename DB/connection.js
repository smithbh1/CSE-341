   
const dotenv = require('dotenv');
dotenv.config()

const MongoClient = require('mongodb').MongoClient;

let _client;
let _collection;

const initDatabase = () => {

    const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.b8eds.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
    MongoClient.connect(URI, (err, client) => {
        if(err) throw err;
        _client = client;
        _collection = client.db("contacts").collection("contacts");
        console.log("DB Connected Successfully")
});
};
const getCollection = () => {
    return _collection;
}



module.exports = { initDatabase, getCollection };