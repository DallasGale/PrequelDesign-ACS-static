import React from "react"

const ProfileLayout = ({id, title, active, children}) => {
  return (
    <div className={`tab-pane ${active ? "active" : ""}`} id={id}>
      <h3 className="display1">{title}</h3>
      <div className="profile-layout__content card-bg">{children}</div>
    </div>
  )
}

export const data = {
  active: false,
  title: "",
  id: "",
}
export default ProfileLayout
