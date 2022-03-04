import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Form.css";
import Task from './Task';


function Form() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [tasks, setTasks] = useState({});
    const [status, setStatus] = useState(false);

    const [editTodoData, setEditTodoData] = useState(null);


    async function sendData(e) {
        e.preventDefault();

        const addTask = {
            title,
            description

        }

        console.log(addTask);

        // axios.post("http://localhost:8070/tasks/add", addTask)
        //     .then(() => {
        //         // alert("Task Added");
        //         getTasks()

        //     }).catch((err) => {
        //         alert(err)
        //     })

          //Only post if editTodoData is not provided
          if(!editTodoData){
            await axios.post("http://localhost:8070/tasks/add", addTask)
            getTasks();
        }else{
            //Update the data if we do have the ediTodoData
            await axios.post(`http://localhost:8070/tasks/update/${editTodoData._id}`, editTodoData)
            getTasks();
        }


    }





    useEffect(() =>{
        if(editTodoData){
            setTitle(editTodoData.title ? editTodoData.title : '')
            setDescription(editTodoData.description ? editTodoData.description : '')
        }

    },[editTodoData])


    const editTodos  = (todosData) =>{
        console.log("editfunc: "+todosData);
        setEditTodoData(todosData);
    }

    useEffect(()=>{
        
        getTasks();
      }, [])

      function getTasks(){
        axios.get("http://localhost:8070/tasks/")
        .then((res)=>{
          console.log(res);
          setTasks(res.data);
          setStatus(true);
          renderTasks();

        }).catch((err)=>{
          alert(err.message);
        })
      
      }
    
    
     
      const renderTasks = () =>{
        if(status){
        console.log(tasks[0]);
        console.log(tasks[1]);

        let sortedTasks = [...tasks];

        sortedTasks = sortedTasks.sort((a, b)=>{
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        
        return sortedTasks.map((item) =>{
          return <Task id={item._id} heading={item.title} desc = {item.description} getTasks={getTasks} editTodos={editTodos}/>
        })
        
      }
      
      }
    


    return (


        <div className="form-container">
            <h6>Add New Task</h6>
            <form onSubmit={sendData}>
                <div class="form-group" style={{ textAlign: "left", fontWeight: "bold" }}>
                    <label for="exampleFormControlInput1"> Title </label>
                    <input
                        type="text"
                        class="form-control"
                        id="title"
                        placeholder="My Title"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    >

                    </input>
                </div>

                <div class="form-group" style={{ textAlign: "left", fontWeight: "bold" }}>
                    <label for="exampleFormControlTextarea1"> Description </label>
                    <textarea
                        class="form-control"
                        id="description"
                        rows="3"
                        placeholder="My Description"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    >

                    </textarea>
                </div>

                <button type="submit" class="btn btn-primary"
                    style={{}}>

                    Add Task
                </button>
            </form>
            <br/>
      <br/>
      <h6>Tasklist</h6>

      {renderTasks()}

        </div>
    );
}

export default Form;
