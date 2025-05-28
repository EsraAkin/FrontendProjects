import React from 'react'
import TaskShow from './TaskShow'

export default function TaskList({tasks}) {
  return (
    <div className='task_list'>{tasks.map((task, index)=>{
      return(

        <TaskShow key={index} task={task}/>
      )
    })}</div>
  )
}
