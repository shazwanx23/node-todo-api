var mongoose = require('mongoose');

mongoose.promise = global.Promise;
//heroku mongo ''
mongoose.connect(process.env.MONGODB_URI);
// mongoose.connect('mongodb://heroku_g7t4k15b:nofeeroactj4rk3asr8d8bc4f6@ds119618.mlab.com:19618/heroku_g7t4k15b' || 'mongodb://localhost:27017/TodoApp');
// mongodb://heroku_g7t4k15b:heroku123password@ds119618.mlab.com:19618/heroku_g7t4k15b
module.exports = { mongoose };
