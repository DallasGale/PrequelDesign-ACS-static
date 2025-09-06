import React from "react"
import {navItems} from "./navItems"

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar__list">
        {navItems.map((item) => {
          return (
            <li className="sidebar__list-item">
              <img src="" className="sidebar__list-item-icon" />
              {item.label}
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
