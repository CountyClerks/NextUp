import todos from "../../exampleToDo.json"
import weekIcon from "../assets/calendar-week.png"
import todayIcon from "../assets/today.png"
import "./Menu.css"
import { useState } from "react"
export default function Menu() {

    const [todoGroups, setToDoGroups] = useState(todos)
    const [newListMenu, setNewListMenu] = useState("menu-close")

    const listGroups = todoGroups.map((todos, index) => {
        return (
            <div className="menu-container-lists-category-item" key={`${todos.group}-${index}`}>
                <h3>{todos.group}</h3>
            </div>
        )
    })

    const changeListMenuStyle = () => {
        if (newListMenu !== "menu-open") setNewListMenu("menu-open")
        else setNewListMenu("menu-close")
    }

    return( 
        <>
            <section className="menu-container">
                <div className="menu-container-banner">
                    <h1>Menu</h1>
                </div>
                <div className="menu-container-tasks">
                    <h2>Tasks</h2>
                        <div className="today">
                            <img src={todayIcon} className="today-icon" />
                            <h3 className="menu-container-today">Today</h3>
                        </div>
                        <div className="week">
                            <img src={weekIcon} className="week-icon"/>
                            <h3 className="menu-container-thisweek">This Week</h3>
                        </div>
                </div>
                <div className="menu-container-lists">
                    <h2>Lists</h2>
                    <div className="menu-container-lists-category">{listGroups}</div>
                    <button className="menu-container-new-list" onClick={changeListMenuStyle}>Add List</button>
                    <div className={newListMenu}>
                        <div className="list-input">
                            <input placeholder="List Name"></input>
                            <div className="list-input-btns">
                                <button className="list-input-create">Create</button>
                                <button className="list-input-cancel" onClick={changeListMenuStyle}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}