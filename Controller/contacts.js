const mongodb = require('../DB/connection');
const MongoClient = require('mongodb').MongoClient
const dotenv = require('dotenv');
dotenv.config()


const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.b8eds.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

MongoClient.connect(URI, function(err, db){
  if(err) throw err;
  let dbo = db.db("");
  dbo.collection("").find().toArray(function(err, result) {
    if(err) throw err;
    console.log(result);
    db.close();
  });
});

module.exports =  MongoClient;
// const getSingle = async (req, res, next) => {
//   const userId = new ObjectId(req.params.id);
//   const result = await mongodb
//     .getDb()
//     .db()
//     .collection('contacts')
//     .find({ _id: userId });
//   result.toArray().then((lists) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).json(lists[0]);
//   });
// };

// module.exports = { getAll, getSingle };