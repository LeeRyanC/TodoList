import React from 'react'
import {FcFullTrash} from 'react-icons/fc'

import '../App.css'

const Task = ({deleteTask, tasks, setTasks}) => {

    const completeTask = (id) => {
        const updatedTasks = tasks.map(task => {
            if(task.id === id){
                task.complete = !task.complete
            }
            return task
        })
        setTasks(updatedTasks)
    }

    return (
        <div className="task-container">
        {
            tasks.map((task, index) => (
                <div key={index} className="task">
                    <div className={task.complete ? "task-name-complete" : "task-name"} onClick={() => completeTask(task.id)}>
                        {task.text}
                    </div>
                    <div className="icons">
                        <FcFullTrash className="trash" onClick={() => deleteTask(task.id)}/>
                    </div>
                </div>
            ))
        }
        </div>
    )
}

export default Task
