import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {//named export
    return (
        <div className="container">
             <h3>TODOLIST</h3>
           {props.todos.length===0? "No todos to Display" :
            props.todos.map((todo) =>{
            return <TodoItem todo={todo} key={todo.serial} onDelete={props.onDelete}/>
        })}
          
        </div>
    )
}

