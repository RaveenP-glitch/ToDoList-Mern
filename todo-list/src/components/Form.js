import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Form.css";
import Task from './Task';


function Form() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [tasks, setTasks] = useState({});
    const [status, setStatus] = useState(false);


    function sendData(e) {
        e.preventDefault();

        const addTask = {
            title,
            description

        }

        console.log(addTask);

        axios.post("http://localhost:8070/tasks/add", addTask)
            .then(() => {
                alert("Task Added");
                getTasks()


            }).catch((err) => {
                alert(err)
            })

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
        
        }).catch((err)=>{
          alert(err.message);
        })
      
      }
    
    
     
      const renderTasks = () =>{
        if(status){
        console.log(tasks[0]);
        console.log(tasks[1]);
        
        return tasks.map((item) =>{
          return <Task id={item._id} heading={item.title} desc = {item.description} />
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
