// const MongoClient = require('mongodb').MongoClient;
/// put in mongo.config file
// dbpath=D:\Users\shazwan.hisham\mongo-data\
//run
//mongod.exe --config /path/to/config/file
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);
//
// var user = { name: 'shazwan', age: 25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDb server');
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //name, age, location
  // db.collection('Users').insertOne({
  //   name: 'Shazwan',
  //   age: 23,
  //   location: 'Seri Kembangan'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert user', err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });
  db.close();
});
