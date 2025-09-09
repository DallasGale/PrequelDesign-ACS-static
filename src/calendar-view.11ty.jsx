import React from "react"

import Layout from "./layout.11ty"

const CalendarView = ({title}) => {
  return (
    <Layout>
      <h1 className="display1">{title}</h1>
      <div id="calendar" class="calendar"></div>
    </Layout>
  )
}

export default CalendarView
export const data = {
  title: "Calendar",
}
