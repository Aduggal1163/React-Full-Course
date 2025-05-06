import React from 'react'
import { FaTrash } from "react-icons/fa";
export default function TodoItem({todoName, todoDate, handleDeleteClick}) {
  return (
    <div className="container">
       <div className="row ad-row">
          <div className="col-4">
            {todoName}
          </div>
          <div className="col-4">
            {todoDate}
          </div>
          <div className="col-2">
          <button type="button" className="btn btn-danger ad-button" onClick={()=>handleDeleteClick(todoName)}><FaTrash/></button>
          </div>
        </div>

    </div>
  )
}
