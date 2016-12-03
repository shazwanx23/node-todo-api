var mongoose = require('mongoose');

mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completed_at: {
    type: Number
  }
});
//
// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo ', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });
var todo2 = new Todo({
  text: 'Finish 5 videos',
  completed: true,
  completed_at: 3122016
});

todo2.save().then((doc)=> {
  console.log('todo2 saved successfully', doc);
}, (e)=> {
  console.log('Unable to save todo2', e);
})
