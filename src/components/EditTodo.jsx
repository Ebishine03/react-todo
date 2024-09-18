import {useState} from 'react'
export const EditTodo=({editTodo,task})=>{

    const [value,setValue]=useState(task.task)
    const handleSubmit =e=>{ e.preventDefault()
      editTodo(value,task.id)
    setValue('')
    }
    
        return (
            <div>
              <form className='TodoForm' action="" onSubmit={handleSubmit}>
        
        <input value={value} type="text" className='todo-in' placeholder='Update Task' onChange={(e)=>setValue(e.target.value)} />
        <button type='submit' className='todo-btn'> Update Task</button>
        
              </form>
             
            </div>
          )
    }
