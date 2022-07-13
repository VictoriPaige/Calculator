import React from "react";
import {useState} from "react";

export default function Calculator(){

//const[value1, setvalue1]=useState({})
//make sure to spread what is inside the object for it to carry out
    return(
<div className="container">
<div className = "wrapper"></div>
<div className="screen"> </div>
<h1>Add with React!</h1>



<form className="add"> 
  <input type="text" name="value1" />
  <span>+</span>
  <input type="text" name="value2" />
  <span>=</span>
  <h3>Addition results go here!</h3>
</form>

</div>

    )
}