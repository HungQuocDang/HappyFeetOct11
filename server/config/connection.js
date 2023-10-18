const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/happyfeet-shoppingb');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://hungoct17:Test1234@cluster0.b00xfaa.mongodb.net/');

module.exports = mongoose.connection;
