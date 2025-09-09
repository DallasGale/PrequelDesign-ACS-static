import React from "react"
import Layout from "./layout.11ty"

const CourseBadges = ({title}) => {
  return (
    <Layout>
      <h1 className="display1">{title}</h1>
    </Layout>
  )
}

export default CourseBadges
export const data = {
  title: "Course Badges",
}
