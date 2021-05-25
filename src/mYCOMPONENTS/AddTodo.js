import React, { useState } from 'react'

export const AddTodo = ({addTodo}) => {
    const [title,setTitle]= useState("");
    const [desc,setDesc]= useState("");
    const submit= (e)=>{
        e.preventDefault();
        if(!title||!desc){
            alert("Title or description cannot be blank")
        }
       else{
            addTodo(title,desc);
        setDesc("");
        setTitle("");
        
       }
        
    }
    return (
        <div>
            <div className="container">
             <h3>Add a Todo</h3>
            <form onSubmit={submit}>
   <div className="form-group">
      
    <label for="title">ToDo Name</label>
    <input type="text" className="form-control" value={title} id="title" onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter title"/>
    <small id="emailHelp" className="form-text text-muted">Don't just write here, Make it happen too !</small>
   </div>
   <div className="form-group">
    <label for="exampleInputPassword1">Todo Description</label>
    <input type="text" className="form-control" id="desc" value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="Description"/>
   </div>
   
   <button type="submit" className="btn btn-success btn-sm mt-3">Add Todo</button>
   </form>
       </div>
       </div>
    )
}
