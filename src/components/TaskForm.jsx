import React, {useState} from 'react'
import Task from './Task';

const TaskForm = ({addTask, tasks}) => {

    const [input, setInput] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();

        let copy = tasks.map(task => {
            if(task.text === input){
                return input
            }
            else return;
        })
        if(copy.length){
            alert("That's already on the list!")
        }
        else {
            addTask({
                text: input,
                id: Math.floor(Math.random() * 10000),
                complete: false
            })
        }

        setInput("")
    }


    return (
        <div className="form-container">
            <form onSubmit={submitHandler}>
                <input type="text" name="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                <button className="submit-btn" type="submit">Add Task</button>
            </form>
        </div>
    )
}

export default TaskForm
