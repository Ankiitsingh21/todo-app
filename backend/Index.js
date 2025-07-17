const express = require('express');
const { createTodo, updateTodo } = require('./Type.js');
const app = express();

app.use(express.json());

app.post('/api',(req,res)=>{
        res.status(201).json({
                message:"Succesfully Fetched"
        });
})

app.post('/todo',(req,res)=>{

})

app.get('/todos',(req,res)=>{

})

app.put('/completed',(req,res)=>{

})

app.listen(3000,()=>{
        console.log(`Server has been Started`);

});


