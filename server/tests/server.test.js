const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server.js');

const {Todo} = require('./../models/todo.js');
const {ObjectID} = require('mongodb');

const todos = [{
  _id: new ObjectID(),
  text: 'First todo'
}, {
  _id: new ObjectID(),
  text: 'Second todo'
}];

beforeEach((done) => {
  Todo.remove({}).then(() => {
    Todo.insertMany(todos);
    done();
  });
});

describe('Post /todos' , () => {
  it('should create a new todo' , (done) => {
    var text = 'Text todo text';

    request(app)
    .post('/todos')
    .send({
      text: text
    })
    .expect(200)
    .expect((res) => {
      expect(res.body.text).toBe(text);
    })
    .end((err , res) => {
      if (err) {
        return done(err)
      }

      Todo.find({text}).then((todos) => {
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
        done();
      }).catch((e) => {
        done(e);
      });

    });

  });

  it('should not add a todo with wrong body data' , (done) => {
    request(app)
    .post('/todos')
    .send({})
    .expect(400)
    .end((err , res) => {
      if (err) {
        return done(err)
      }

      Todo.find().then((todos) => {
        expect(todos.length).toBe(2);
        done();
      }).catch((e) => {
        done(e);
      });

    });
  });

});

describe('GET /todos', ()=> {
  it('should get all todos' , (done) => {
    request(app)
    .get('/todos')
    .expect(200)
    .expect((res) => {
      expect(res.body.todos.length).toBe(2);
    })
    .end(done);
  });
});

describe('GET /todos/:id' , () => {
  it('should return a todo with the given id' , (done) => {
    request(app)
    .get(`/todos/${todos[0]._id.toHexString()}`)
    .expect(200)
    .expect((res) => {
      expect(res.body.todo.text).toBe(todos[0].text)
    })
    .end(done);
  });

  it('should return 404 when object id does not exists' , (done) => {
    request(app)
    .get(`/todos/${new ObjectID().toHexString()}`)
    .expect(404)
    .end(done);
  });

  it('should return 400 when object id is not valid' , (done) => {
    request(app)
    .get('/todos/123')
    .expect(404)
    .end(done);
  });

});
