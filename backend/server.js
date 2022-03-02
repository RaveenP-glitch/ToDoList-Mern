const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
require("dotenv").config();
const app = express();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());


const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
        
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB Connection success!");

})

const takslistRouter = require("./routes/newtasks.js");

app.use("/tasks",studentRouter);

app.listen(PORT, ()=>{
    console.log(`Server is up and running on port: ${PORT}`)
})




