import todos from "../../exampleToDo.json"
import "./Menu.css"
import { useState } from "react"
export default function Menu() {

    const [todoGroups, setToDoGroups] = useState(todos)

    const listGroups = todoGroups.map((todos, index) => {
        return (
            <div className="menu-container-lists-category-item" key={`${todos.group}-${index}`}>
                <h3>{todos.group}</h3>
            </div>
        )
    })

    return( 
        <>
            <section className="menu-container">
                <div className="menu-container-banner">
                    <h1>Menu</h1>
                    <button className="menu-burger"/>
                </div>
                <div className="menu-container-tasks">
                    <h2>Tasks</h2>
                        <h3>Upcoming</h3>
                        <h3>Today</h3>
                        <h3>Calendar</h3>
                </div>
                <div className="menu-container-lists">
                    <h2>Lists</h2>
                    <div className="menu-container-lists-category">{listGroups}</div>
                </div>
            </section>
        </>
    )
}