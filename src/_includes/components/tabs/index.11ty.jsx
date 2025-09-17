import React from "react"
import Tab from "./tab/index.11ty"

const Tabs = ({tabs}) => {
  return (
    <ul class="nav nav-tabs ms-0 mb-3 border-0">
      {tabs.map((tab) => {
        return (
          <Tab key={tab.id} id={tab.id} label={tab.label} active={tab.active} />
        )
      })}
    </ul>
  )
}

export const data = {
  tabs: [],
}

export default Tabs
