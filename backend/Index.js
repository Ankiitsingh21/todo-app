const express = require('express');
const { createTodo, updateTodo } = require('./Type.js');
const app = express();

app.use(express.json());


app.post('/todo',(req,res)=>{
        const createPayload = req.body;
        const parsePayload = createTodo.safeParse(createPayload);
        if(!parsePayload.success) {
                return res.status(400).json({
                        msg:"You sent the wrong inputs",
                });
                return;
        }
        //put it in the mongo db
})

app.get('/todos',(req,res)=>{

})

app.put('/completed',(req,res)=>{
        const updatePayload = req.body;
        const parsePayload = updateTodo.safeParse(updatePayload);
        if(!parsePayload.success) {
                return res.status(400).json({
                        msg:"You sent the wrong inputs",
                });
                return;
        }
        //put it in the mongo db
})

app.listen(3000,()=>{
        console.log(`Server has been Started`);

});


