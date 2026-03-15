import { useState } from "react"
import todos from "../../exampleToDo.json"

export default function createTask() {

    const [newTask, setNewTask] = useState({
        id: "",
        title: "",
        description: "",
        completed: false,
        group: ""
    })

    const [groupOptions, setGroupOptions] = useState(todos)
    const [selectedDropdown, setSelectedDropdown] = useState("")

    const addTask = (e: any) => {
        e.preventDefault();
         todos.push(newTask)
         console.log(newTask)
    }

    const handleNewTask = (e: any) => {
        setNewTask((value) => ({...value, [e.target.id]: e.target.value}))
        console.log(newTask)
    }

    const groups = groupOptions.map((todos, index) => {
        // setSelectedDropdown(`${todos.group}`)
        // console.log(todos)
        return (
            <option key={`${todos.group}-${index}`} value={todos.group}>{todos.group}</option>
        )
    })
    return (
        <>  
            <form className="newTask-inputs" onSubmit={addTask}>
                <input type="text" placeholder="Task Title" id="title" onChange={handleNewTask}></input>
                <input type="text" placeholder="Description" id="description" onChange={handleNewTask}></input>
                <select id="group"  name="task-groups" value={selectedDropdown} onChange={handleNewTask}>
                    <option value={selectedDropdown}>Select</option>
                    {groups}
                </select>
                <button type="submit">Add Task</button>
            </form>
        </>
    )
}