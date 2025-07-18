/**
 * 
 * Schema :{
 * title:String,
 * description:String,
 * completed:Boolean,
 * }
 */

const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017');
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

// connect();

const todoSchema = new mongoose.Schema({
        title:{
                type: String,
                // required: true,
        }
        ,description:{
                type: String,
                // required: true,
        },
        completed:{
                type: Boolean,
                default: false,
        }
},{timestamps:true});

const todo = mongoose.model('todos',todoSchema);

module.exports = todo;
module.exports.connect = connect;