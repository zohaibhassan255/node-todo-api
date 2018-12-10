const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos' , (req , res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  } , (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos' , (req , res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  } , (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id' , (req , res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send('The id is not valid.')
  }
    Todo.findById(id).then((todo) => {
      if (!todo) {
        return res.status(404).send([]);
      }
      res.status(200).send({todo});
    }).catch((e) => {
      res.status(400).send(e);
    });

});

app.delete('/todos/:id' , (req , res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send('Id is not valid');
  }

  Todo.findByIdAndRemove(`${id}`).then((todo) => {
    if (!todo) {
      return res.status(404).send('Todo not found');
    }

    res.status(200).send({todo});

  }).catch((e) => {
    res.status(400).send(e);
  });

});

app.patch('/todos/:id' , (req, res) => {
  var id = req.params.id;

  var body = _.pick(req.body , ['text' , 'completed']);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send('Id is not valid');
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id , {$set: body} , {new: true}).then((todo) => {
    if (!todo) {
      return res.status(400).send('Todo not found.');
    }

    res.send({todo});


  }).catch((e) => {
    return res.status(404).send('Todo not found.');
  });

});

app.listen(port , () => {
  console.log('Server started on port 3000');
});

module.exports = {
  app: app
};
