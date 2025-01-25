const mongoose=require('mongoose'); 

//Define the MongoDB connection url
const mongoURL='mongodb://localhost:27017/hotels'

//Setup MOngooDb connection
mongoose.connect(mongoURL)
    .then(() => {
        console.log('Connected to MongoDB server');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });
//Get the default connection
//Mongoose maintains a default connection object representing the MongoDB connection
const db=mongoose.connection;
//Define event listeners for database connection

db.on('connected',()=>{
    console.log('Conneceted to MongoDB server');
});

db.on('error',(err)=>{
    console.log('MongoDB connection error:',err);
});
db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
});

//Export the database connection
module.exports=db;