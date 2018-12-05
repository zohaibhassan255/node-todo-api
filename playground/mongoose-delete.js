const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findByIdAndRemove('5c0819d4fbf61f11b2d51e2b').then((doc) => {
//   console.log(doc);
// });

Todo.findOneAndRemove({_id : '5c081a59fbf61f11b2d51e30'}).then((doc) => {
  console.log(doc);
});
