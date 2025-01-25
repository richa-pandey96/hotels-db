const express = require('express')
const app = express();
const db=require('./db');
require('dotenv').config();

const bodyParser=require('body-parser');
app.use(bodyParser.json());//req.body
const PORT=process.env.PORT|| 3000;

//Importing the router files
const personRoutes=require('./routes/personRoutes');
const menuRoutes=require('./routes/menuRoutes');



//const MenuItem=require('./models/Menu.js');

app.get('/', function (req, res) {
  res.send('Welcome welcome')
})


// //POST method to add a menuitem
// app.post('/menu', async (req,res)=>{
//     try{
//         const data=req.body//Assuming the request bosy contains the person data
//     //Create a new Person document using the Mongoose model
//     const newMenu=new MenuItem(data);

//     //Save the new person to the database
//     const response=await newMenu.save();
//     console.log('data saved');
//     res.status(200).json(response);
// }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error: 'Internal Server Error'});

//     }
// })
// //Get method to get the menu items
// app.get('/menu', async (req,res)=>{
//     try{
//         const data=await MenuItem.find();
//         console.log('data fetched');
//         res.status(200).json(data);
// }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error: 'Internal Server Error'});

//     }
// })
//get meethod to get the details of person worktype
// app.get('/person/:workType', async (req,res)=>{
//     try{
//         const workType=req.params.workType;//Extract the work type from the URL parameter
//         if(workType=='chef'|| workType=='manager'|| workType=='waiter'){
//             const response=await Person.find({work:workType});
//             console.log('response fetched');
//             res.status(200).json(response);
//         }
//         else{
//             res.status(404).json({error: 'Invalid worktype  Error'});
//         }
        
// }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error: 'Internal Server Error'});

//     }
// })

//use the routers
app.use('/person',personRoutes);
app.use('/menu',menuRoutes);



app.listen(PORT,()=>{
    console.log("listening on port 3000");

})



// app.get('/paneer',  (req, res)=> {
//     res.send('Sure!paneer')
// })

// app.get('/idli',  (req, res)=> {
//     //res.send('Sure!idli')
//     var customized_idli={
//         name:'rava idli',
//         size:'10 cm diameter',
//         is_samabhar:true,
//         is_chutney:false,
//     }
//     res.send(customized_idli)
// })








//parsing json to json object(inter Conversion JSON to an OBJECT in nodejs)
// const jsonString='{"name": "John", "age":30,"city":"New York"}';
// const jsonObject=JSON.parse(jsonString);
// console.log(jsonObject.name);

//converting json objects to json string
// const objectToConvert={
//     name:"Alice",
//     age:25
// };
// const json=JSON.stringify(objectToConvert);
// console.log(json);



// function add(a,b){
//     return a+b;
// }
// var result=add(2,20);
// console.log(result);;

// var fs=require('fs');
// var os=require('os');

// var user=os.userInfo();
// // console.log(user);
// console.log(user.username);

// fs.appendFile('greetings.txt', 'Hi' + user.username + '!\n', ()=>{
//     console.log('file is created');
// });


//in order to export notes.js file's functions and variables in server.js file.
// const notes=require('./notes.js');
// console.log('server file is available');

// var age=notes.age;

// var result=notes.addNumber(age+18,10);
// console.log(age);
// console.log('result is now :'+result);

//use of lodash in order to deal wid data efficiently
// var _=require('lodash');
// var data=["person", "person", 1,2, 1, 2, 'name', 'age', '2'];

// //for ex-here in order to filter out the unique elements from array
// var filter=_.uniq(data);//using uniq function from lodash here
// console.log(filter);

// console.log(_.isString('person'));//it will return true if the given data is string


