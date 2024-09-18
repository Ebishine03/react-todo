import React,{useState} from 'react'


export const TodoForm=({addTodo})=>{

const [value,setValue]=useState('')
const handleSubmit =e=>{ e.preventDefault()
  addTodo(value)
setValue('')
}

    return (
        <div>
          <form className='TodoForm' action="" onSubmit={handleSubmit}>
    
    <input value={value} type="text" className='todo-in' placeholder='TodayS Task' onChange={(e)=>setValue(e.target.value)} />
    <button type='submit' className='todo-btn'> Add Task</button>
    
          </form>
         
        </div>
      )
}
