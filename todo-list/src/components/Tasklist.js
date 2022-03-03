import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Task from './Task';

function Tasklist() {

  const [tasks, setTasks] = useState({});
  const [status, setStatus] = useState(false);

  useEffect(()=>{
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
    getTasks();
  }, [])



 
  const renderTasks = () =>{
    if(status){
    console.log(tasks[0]);
    console.log(tasks[1]);
    
    return tasks.map((item) =>{
      return <Task key={item._id} heading={item.title} desc = {item.description} />
    })
    
  }
  
  }


  return (
    <div>
      <br/>
      <br/>
      <h6>Tasklist</h6>

      {renderTasks()}


      </div>
  )
}

export default Tasklist


// function getTasks(){
//   axios.get("http://localhost:8070/tasks/")
//   .then((res)=>{
//     console.log(res);
//     setTasks(res.data);
  
//   }).catch((err)=>{
//     alert(err.message);
//   })

// }
// getTasks();