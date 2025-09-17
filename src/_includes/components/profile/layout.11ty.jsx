import React from "react"

const ProfileLayout = ({id, title, active, children}) => {
  return (
    <div className={`tab-pane ${active ? "active" : ""}`} id={id}>
      <div className="card-bg generic-page">
        <h1 className="display1">{title}</h1>
        <div className="generic-page__content">{children}</div>
      </div>
    </div>
  )
}

export const data = {
  active: false,
  title: "",
  id: "",
}
export default ProfileLayout
