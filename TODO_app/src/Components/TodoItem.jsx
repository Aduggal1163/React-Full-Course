import React from 'react'

export default function TodoItem({todoName, todoDate}) {
    // let todoName="Buy Kinder Joy";
    // let todoDate="21-01-2025"
  return (
    <div class="container">
       <div class="row ad-row">
          <div class="col-4">
            {todoName}
          </div>
          <div class="col-4">
            {todoDate}
          </div>
          <div class="col-2">
          <button type="button" class="btn btn-danger ad-button">Delete</button>
          </div>
        </div>

    </div>
  )
}
