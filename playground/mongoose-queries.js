const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5842c85831b0e28c1156b5cc11';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }
// Todo.find({
//   _id : id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e))
var userId = '5842920554d9831005af9e90';

User.findById(userId).then((user) => {
  if(!user){
    return console.log('User not found');
  }

  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log('Error occurred: ', e);
});
