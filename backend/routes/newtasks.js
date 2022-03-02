const router = require("express").Router();
const { response } = require("express");
let MyList = require("../models/mylist");


//CREATE
router.route("/add").post((req,res)=>{

    const title = req.body.title;
    const description = req.body.description;

    const newList = new MyList({

        title,
        description

    })

    newList.save().then(()=>{
        res.json("New Task Added")

    }).catch((err)=>{
        console.log(err);

    })

})


//READ
router.route("/").get((req,res)=>{
    
    MyList.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err);
    })
 
})


//UPDATE
router.route("/update/:id").put(async(req, res)=>{

    let userId = req.params.id;
    const {title, description} = req.body;

    const updateTask = {
        title,
        description
    }
    const update = await MyList.findByIdAndUpdate(userId, updateTask).then(()=>{

        res.status(200).send({status: "Task updated"})

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating task", error: err.message});
    });


})  



//DELETE
router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await MyList.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "Task deleted"});

    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete task", error: err.message});
    })

})



//Fetch single item
router.route("/get/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    const singletask = await MyList.findById(userId).then(()=>{
        res.status(200).send({status: "Task fetched",task: singletask});

    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error in fetching user", error: err.message});
    })

})



module.exports = router;