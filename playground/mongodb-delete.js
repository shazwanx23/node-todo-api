const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDb server');

  //deleteMany
  // db.collection('Todos').deleteMany({ text: 'Something to do'}).then((result) => {
  //   console.log(result);
  // });
  //deleteOne
  // db.collection('Todos').deleteOne({text: "Eat lunch"}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // })

  // db.close();
  // db.collection('Users').deleteMany({ name: 'Andrew'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({ _id: ObjectID("583f7f24be137e25acb8462a")}).then((result) => {
    console.log(result);
  })


});
