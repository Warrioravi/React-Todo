import React from 'react'

export const TodoItem = ({todo,onDelete}) => {//named export
    return (
        <>
        <div>
           <h2>{todo.title}</h2>
           <h4>{todo.description}</h4>
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
        <hr />
        </>
    )
}
