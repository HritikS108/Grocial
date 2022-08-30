// create database

// create a mongoose object
const mongoose = require('mongoose');

// specify connection url with correct IP add
mongoose.connect('mongodb://localhost/codeial_development');

// name of database 
const db = mongoose.connection;

// if error on connection 
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

// and once it is connected to db
db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;