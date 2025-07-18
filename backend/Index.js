const express = require('express');
const { createTodo, updateTodo } = require('./Type.js');
const todo = require('./db.js'); // Import the todo model
const { connect } = require('./db.js'); // Import the connect function
const app = express();

app.use(express.json());


app.post('/todo',async (req,res)=>{
        const createPayload = req.body;
        const parsePayload = createTodo.safeParse(createPayload);
        if(!parsePayload.success) {
                return res.status(400).json({
                        msg:"You sent the wrong inputs",
                });
                return;
        }
        await todo.create({
                title:createPayload.title,
                description:createPayload.description,
                completed:false
        })

        return res.status(201).json({
                message:"Successfully created a todo",
        })
})

app.get('/todos',async (req,res)=>{
        const todos = await todo.find({});
        return res.status(201).json({
                msg:"Successfully fetched all todos",
                data:todos
        })
})

app.put('/completed',async (req,res)=>{
        const updatePayload = req.body;
        const parsePayload = updateTodo.safeParse(updatePayload);
        if(!parsePayload.success) {
                return res.status(400).json({
                        msg:"You sent the wrong inputs",
                });
                // return;
        }
        await todo.findByIdAndUpdate(parsePayload.data.id, { completed: true });
        return res.status(201).json({
                msg:"Todo updated"
        })
})

app.listen(3000,async ()=>{
        await connect(); // Connect to MongoDB
        console.log(`Server is running on port 3000`);
        // console.log(`Server has been Started`);

});


