import React from 'react'
import Button from "react-bootstrap/Button";
import {useState} from 'react'

const AddTask = ({addTask}) => {
    const [task,setTask]=useState('')
    const addItem =()=>{
        addTask(task)
        setTask('')
        
    }
  return (
    <div>
      <input  
      type="text" 
      placeholder='Enter Task' 
      value={task}
      onChange={(e)=>setTask(e.target.value)}
      
      />
        <Button onClick={addItem} className='m-3 btn-lg ' variant="primary">Add Task</Button>
     
    
    </div>
  )
}

export default AddTask
