const express=require('express');
const router=express.Router();
const MenuItem=require('./../models/Menu');

//POST method to add a menuitem
router.post('/', async (req,res)=>{
    try{
        const data=req.body//Assuming the request bosy contains the person data
    //Create a new Person document using the Mongoose model
    const newMenu=new MenuItem(data);

    //Save the new person to the database
    const response=await newMenu.save();
    console.log('data saved');
    res.status(200).json(response);
}
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});

    }
})
//Get method to get the menu items
router.get('/', async (req,res)=>{
    try{
        const data=await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
}
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});

    }
})

//get method to get the details of menu items according to their taste(sweet,sour,spicy)
router.get('/:tasteitem', async (req,res)=>{
    try{
        const tasteitem=req.params.tasteitem;//Extract the taste from the URL parameter
        console.log("tasteitem:", tasteitem);
        if(tasteitem=='sweet'|| tasteitem=='sour'|| tasteitem=='spicy'){
            const response=await MenuItem.find({taste:tasteitem});
            console.log('response fetched');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error: 'Invalid worktype  Error'});
        }
        
}
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});

    }
});
module.exports=router;