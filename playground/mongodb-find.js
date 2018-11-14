// const MongoClient = require('mongodb').MongoClient;

const {MongoClient , ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017' , (err , client) => {
  if (err) {
    return console.log('Unable to connect to Mongo DB server');
  }

  console.log('Connected to Mongo DB server.');

  var db = client.db('TodoApp')

  // db.collection('Todos').find({
  //   _id: new ObjectID('5beafb2175a3010f030d3955')
  // }).toArray().then((docs) => {
  //   console.log('Fetching all Todos');
  //   console.log(JSON.stringify(docs , undefined , 2));
  // } , (err) => {
  //   console.log('Unable to fetch: ' , err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos Count: ${count}`);
  // } , (err) => {
  //   console.log('Unable to fetch: ' , err);
  // });

  db.collection('Users').find({name: 'Khan'}).toArray().then((users) => {
    console.log('Users');
    console.log(JSON.stringify(users , undefined , 5));
  } , (err) => {
    console.log('Unable to fetch: ' , err);
  });

  // client.close();
});
