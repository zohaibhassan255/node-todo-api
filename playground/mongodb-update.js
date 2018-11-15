// const MongoClient = require('mongodb').MongoClient;

const {MongoClient , ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017' , (err , client) => {
  if (err) {
    return console.log('Unable to connect to Mongo DB server');
  }

  console.log('Connected to Mongo DB server.');

  var db = client.db('TodoApp')

  // db.collection('Todos').findOneAndUpdate({
  //   _id : new ObjectID('5bec576ffbf61f12192472a1')
  // } , {
  //   $set: {
  //     completed : true
  //   }
  // } , {
  //   returnOrignal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id : new ObjectID('5bec59befbf61f12192472b0')
  } , {
    $set: {
      name : 'Zohaib'
    },
    $inc: {
      age: 1
    }
  } , {
    returnOrignal: false
  }).then((result) => {
    console.log(result);
  });

  // client.close();
});
