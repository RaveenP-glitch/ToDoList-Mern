import React, { useState, useEffect } from 'react';
import './Task.css';
import axios from 'axios';




function Task(props, editTodos) {




  // function MarkDone() {
  //   // Get the checkbox
  //   var checkBox = document.getElementById("Check1");
  //   // Get the output text
  //   var head = document.getElementById("head");
  //   var body = document.getElementById("body");
  //   let text1 = head.innerHTML;
  //   let text2 = body.innerHTML;
  //   console.log("text2: ");

  //   // If the checkbox is checked, display the output text
  //   if (checkBox.checked == true){
  //     head.innerHTML=text1.strike();
  //     body.innerHTML=text2.strike();
  //   } else {
  //     head.innerHTML=props.heading;
  //     body.innerHTML=props.desc;
  //   }
  // }

dfd

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
            style={{ fontSize: "10px", borderRadius: "15px", }} onClick={() => {editTodos(props)}}>
            Update
          </button>
          <button type="delete" class="btn btn-outline-danger"
            style={{ fontSize: "10px", marginLeft: "10px", borderRadius: "15px" }} onClick={deleteData}>
            Delete
          </button>
        </div>
      </span>
    </div>
  )
}

export default Task