const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDb server');
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('584129017cc303928153a247')
  // },{
  //   $set: {
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('583f81c25f00a71ad44362b6')
  },{
    $set: {
      name: 'YourName'
    },
    $inc: {
      age: 5
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


  // db.close();
});
