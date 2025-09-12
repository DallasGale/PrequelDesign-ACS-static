import React from "react"

const Tab = ({id, label, active}) => {
  return (
    <li class="nav-item">
      <a
        class={`nav-link ${active ? "active" : ""}`}
        data-bs-toggle="tab"
        href={id}
      >
        {label}
      </a>
    </li>
  )
}

export const data = {
  id: "",
  label: "",
  active: false,
}
export default Tab
