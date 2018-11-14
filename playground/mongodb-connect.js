// const MongoClient = require('mongodb').MongoClient;

const {MongoClient , ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017' , (err , client) => {
  if (err) {
    return console.log('Unable to connect to Mongo DB server');
  }

  console.log('Connected to Mongo DB server.');

  // var db = client.db('TodoApp')
  //
  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // } , (err , result) => {
  //   if (err) {
  //     return console.log('Unable to insert record: ' ,err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops , undefined , 2));
  //
  // });


  // db.collection('Users').insertOne({
  //   name: 'Zohaib',
  //   age: 25,
  //   location: 'Karachi, Pakistan'
  // } , (err , result) => {
  //   if (err) {
  //     return console.log('Unable to insert: ' , err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops , undefined , 2));
  // });

  client.close();
});
