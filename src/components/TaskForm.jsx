import React, {useState, useEffect, useRef} from 'react'


const TaskForm = ({addTask, tasks}) => {

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })
    const [input, setInput] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();

        addTask({
            text: input,
            id: Math.floor(Math.random() * 10000),
            complete: false
        })

        setInput("")
    }


    return (
        <div className="form-container">
            <form onSubmit={submitHandler}>
                <input type="text" name="text" value={input} ref={inputRef} onChange={(e) => setInput(e.target.value)}/>
                <button className="submit-btn" type="submit">+</button>
            </form>
        </div>
    )
}

export default TaskForm
