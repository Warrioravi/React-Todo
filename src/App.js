import './App.css';
import Header from './mYCOMPONENTS/Header';
import {Todos} from './mYCOMPONENTS/Todos';//default export-Import
import { Footer } from "./mYCOMPONENTS/Footer";
import React, { useState ,useEffect } from 'react';
import { AddTodo } from "./mYCOMPONENTS/AddTodo";
import {About} from "./mYCOMPONENTS/About"
  
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



///learn usestate hook along with useEffect hook

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo)=>{
    console.log("Inside OnDelete",todo);
    // this will not atually delete todo Element from todos array!!!
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(todos.filter((e)=>{
      return e!==todo
    }))
    localStorage.setItem("todos",JSON.stringify(todos));
  
  }
  
  
  
  
  
  const addTodo=(title,desc)=>{
  console.log("I am adding this todo",title,desc);
  let sno=todos.length>0? todos[todos.length-1].serial+1 : 1;
  const myTodo={
     serial:sno,
     title :title,
     description: desc
  }

  setTodos([...todos,myTodo]);
  console.log(myTodo);
  
}



const [todos, setTodos] = useState(initTodo);
useEffect(() => {
  localStorage.setItem("todos",JSON.stringify(todos));
}, [todos])
 
 


  return (
  <>
  <Router>
  <Header  title="MyTODO"  searchBar={false}/>
  <Switch>
           <Route exact path="/" render={()=>{
             return(
             <>
             <AddTodo addTodo={addTodo}/>
             <Todos todos={todos} onDelete={onDelete}/>
             <Footer/>
             </>)
           }}>
         </Route>
          
          <Route exact path="/about">
            <About />
          </Route>
         
        </Switch>
  
  </Router>
  </>
  );
}


export default App;
