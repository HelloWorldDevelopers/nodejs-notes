const express=require("express")
const mongodb=require("mongoose")
mongodb.connect('mongodb://127.0.0.1:27017/NewDatabase', { useNewUrlParser: true, useUnifiedTopology: true });
 const db = mongodb.connection;
 db.on('connected', () => {
    console.log('Connected to MongoDB');
});
db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});
db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});

module.exports=mongodb;