// const MongoClient = require('mongodb').MongoClient;

const {MongoClient , ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017' , (err , client) => {
  if (err) {
    return console.log('Unable to connect to Mongo DB server');
  }

  console.log('Connected to Mongo DB server.');

  var db = client.db('TodoApp')

  // db.collection('Users').deleteMany({name: 'Zohaib'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5bec59c8fbf61f12192472b1')
  }).then((result) => {
    console.log(result);
  });

  // db.collection('Todos').deleteMany({text : 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // client.close();
});
