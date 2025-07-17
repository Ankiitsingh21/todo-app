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
        await mongoose.connect('mongodb://localhost/twitter_Dev');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

connect();

const todoSchema = new mongoose.Schema({
        title:{
                tyep: String,
                required: true,
        }
        ,description:{
                type: String,
                required: true,
        },
        completed:{
                type: Boolean,
                default: false,
        }
},{timestamps:true});

const todo = mongoose.model('todos',todoSchema);

module.exports = todo;