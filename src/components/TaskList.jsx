import React, {useState} from 'react'
import TaskForm from './TaskForm'
import Task from "./Task"

const TaskList = () => {

    const [tasks, setTasks] = useState([])

    const addTask = (task) => {
        if(!task.text){
            return;
        }
        setTasks([task, ...tasks])
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <div>
            <h1>What's on the agenda today?</h1>
            <TaskForm className="task-form" addTask={addTask} tasks={tasks}/>
            <Task deleteTask={deleteTask} tasks={tasks} setTasks={setTasks}/>
        </div>
    )
}

export default TaskList
