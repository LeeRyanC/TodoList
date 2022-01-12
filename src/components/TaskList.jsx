import React, {useState} from 'react'
import TaskForm from './TaskForm'
import Task from "./Task"

const TaskList = () => {

    const [tasks, setTasks] = useState([])

    const addTask = (task) => {
        setTasks([task, ...tasks])
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <div>
            <h1>What do you need to do today?</h1>
            <TaskForm className="task-form" addTask={addTask} tasks={tasks}/>
            <Task deleteTask={deleteTask} tasks={tasks} setTasks={setTasks}/>
        </div>
    )
}

export default TaskList
