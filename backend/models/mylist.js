const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tasklistSchema = new Schema({

    title:{
        type: String,
        required: true

    },
    description:{
        type: String,
        required: true
    }

},{
    timestamps:true
})

const TaskList = mongoose.model("TaskList",tasklistSchema);

module.exports = TaskList;