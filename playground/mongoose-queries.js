const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
// const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var userId = '5bf577bf853fbc192aeac68b';

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User: ' , user);
}).catch((e) => console.log(e));

// var id = '5bfed51b8b4fc71f21f50984';
//
// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid.');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) => {
//
//   if (!todo) {
//     return console.log('The id not found.');
//   }
//
//   console.log('Todo by Id: ', todo);
// }).catch((e) => console.log(e));
