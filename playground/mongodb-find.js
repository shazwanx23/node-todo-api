const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDb server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('583f7f5f65ba7c09b4cd924e')
  // }).toArray().then((documents) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(documents, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos.', err);
  // });

  db.collection('Users').find({ name: 'Shazwan'}).count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos.', err);
  });

  // db.close();
});
