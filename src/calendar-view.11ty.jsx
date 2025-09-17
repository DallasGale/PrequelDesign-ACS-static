import React from "react"

import Layout from "./layout.11ty"

const CalendarView = ({title}) => {
  return (
    <Layout>
      <div className="card-bg generic-page">
        <div id="calendar" className="calendar"></div>
      </div>
    </Layout>
  )
}
export const data = {
  title: "Calendar",
}

export default CalendarView
