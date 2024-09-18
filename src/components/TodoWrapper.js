import React,{useState} from 'react'
import {TodoForm } from './TodoForm'
import {TodoList} from './TodoList'
import { EditTodo } from './EditTodo'
import {v4 as uuidv4 } from 'uuid'
uuidv4()
export const TodoWrapper =()=>{

    const [toDos,setTodso]=useState([])
const addTodo =todo=>{
    setTodso([...toDos,{id:uuidv4(),task:todo,completed:false,isEditing:false}])
    console.log(toDos);
    
}
const toggleComplete = (id) => {
    setTodso(
      toDos.map((todo) => 
        todo.id == id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
const deleteTodo =id=>{
    setTodso(toDos.filter(todo=>todo.id !==id))

}
const editTodo =id=>{
    setTodso(toDos.map(todo=>todo.id ==id ?{...todo,isEditing:!toDos.isEditing}:todo ))
}
const editTask =(task,id)=>{setTodso(toDos.map(todo=>todo.id ==id ? {...todo,task,isEditing:!todo.isEditing} : todo))}
    return (

        <div className="TodoWrapper">
        <TodoForm addTodo={addTodo} />
        {toDos.map((todo, index) => 
          todo.isEditing ? (
            <EditTodo key={index} editTodo={editTodo} task={todo} />
          ) : (
            <TodoList 
              key={index} 
              task={todo} 
              toggleComplete={toggleComplete} 
              deleteTodo={deleteTodo} 
              editTodo={editTodo} 
            />
          )
        )}
      </div>
    )
}
