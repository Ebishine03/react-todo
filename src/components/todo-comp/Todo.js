import React from "react";
import "./Todo.css";


import TodoList from "./TodoList";
import {useState} from 'react'
import AddTask from "./AddTask";
const Todo = () => {

  const [task,setTask]=useState([])
  const addTask = (title) => {
    setTask([...task, { title, isEditing: false }]);
  };
const delTask =(index)=>{
  const newtask=[...task]
  newtask.splice(index,1)
  setTask(newtask)
  console.log(newtask);
  
}
  const editTask = (index) => {
    const newTasks = task.map((task, i) => {
      if (i === index) {
        return { ...task, isEditing: true };
      }
      return task;
    });
    setTask(newTasks);
  };
  const saveTask = (newTitle, index) => {
    const newTasks = task.map((task, i) => {
      if (i === index) {
        return { ...task, title: newTitle, isEditing: false };
      }
      return task;
    });
    setTask(newTasks);
  };
  return (
    <div className="todo-container shadow-lg  mx-auto p-3 m-5">
      <div className=" header">
        <h2>To Do</h2>
      </div>
      <div className="add-task  ">
        <AddTask addTask={addTask} ></AddTask>
        </div>
      <div className="list-task">

      {task.map((task,index)=><TodoList task={task} index={index} delTask={delTask} key={index}  editTask={editTask}
            saveTask={saveTask} />)}
      </div>
     
    </div>
  );
};

export default Todo;
