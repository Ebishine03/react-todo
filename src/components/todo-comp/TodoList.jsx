import React, { useState } from "react";
import Button from "react-bootstrap/Button";
const TodoList = ({ task ,index,delTask,editTask, saveTask}) => {
    const [newTitle, setNewTitle] = useState(task.title);
//   return (
//     <div className="list-task">
//       <div className="row">
//         <div className="col-6 col-md-6">
//           <h4 className='shadow-lg bg-light'>{task.title}</h4>
//         </div>
//         <div className="col-6 col-md-6 list-btn">
//           <Button  variant="success" className=" btn-sm ms-3 ">
//             Edit
//           </Button>
//           <Button onClick={()=>{delTask(index)}} variant="danger" className=" btn-sm ms-3 ">
//             Delete
//           </Button>
//         </div>
        
//       </div>
//     </div>
//   );
return (
    <div className="list-task">
      <div className="row">
        <div className="col-6 col-md-6">
          {task.isEditing ? (
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          ) : (
            <h4 className="shadow-lg bg-light">{task.title}</h4>
          )}
        </div>
        <div className="col-6 col-md-6 list-btn">
          {task.isEditing ? (
            <Button
              variant="success"
              className="btn-sm ms-3"
              onClick={() => saveTask(newTitle, index)}
            >
              Save
            </Button>
          ) : (
            <Button
              variant="success"
              className="btn-sm ms-3"
              onClick={() => editTask(index)}
            >
              Edit
            </Button>
          )}
          <Button
            onClick={() => delTask(index)}
            variant="danger"
            className="btn-sm ms-3"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
