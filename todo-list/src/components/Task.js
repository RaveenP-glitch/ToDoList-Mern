import React, { useState,useEffect } from 'react';
import './Task.css';
import axios from 'axios';




function Task(props) {

  // function MarkDone() {
  //   // Get the checkbox
  //   var checkBox = document.getElementById("Check1");
  //   // Get the output text
  //   var text1 = document.getElementById("head");
  //   var text2 = document.getElementById("body");
  
  //   // If the checkbox is checked, display the output text
  //   if (checkBox.checked == true){
  //     text1.style.display = "none";
  //   } else {
  //     text2.style.display = "none";
  //   }
  // }


  
  function deleteData() {

    axios.delete(`http://localhost:8070/tasks/delete/${props.id}`)
        .then(() => {
           props.getTasks();
           
            
           
        }).catch((err) => {
            alert(err)
        })

}





  return (
    <div className='singleTask'>
    
      <p style={{ fontWeight: "bold", textAlign: "left" }} id="head">{props.heading}</p>

      <p className='bodytext' style={{ textAlign: "left", marginTop: "-5px", padding: "0px" }} id="body">{props.desc}</p>
      <span className='end-line'>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="Check1"></input>
          <label class="form-check-label" for="exampleCheck1" id="checkbox-text">Mark as done</label>
      </div>
    
      <div className='button-group'>
        <button type="update" class="btn btn-outline-success"
          style={{ fontSize: "10px", borderRadius:"15px", }}>
          Update
        </button>
        <button type="delete" class="btn btn-outline-danger"
          style={{ fontSize: "10px", marginLeft: "10px", borderRadius:"15px" }} onClick={deleteData}>
          Delete
        </button>
      </div>
      </span>
    </div>
  )
}

export default Task