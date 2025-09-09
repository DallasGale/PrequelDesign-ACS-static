import React from "react"

import Layout from "./layout.11ty"
import CourseList from "./_includes/components/courseList/index.11ty"

const Forum = ({title}) => {
  return (
    <Layout>
      <h1 className="display1">{title}</h1>

      <CourseList
        courses={[
          {
            id: 0,
            name: "Cyber security micro-credential for educators",
            category: "Cyber security",
            replies: 0,
            views: 12,
          },
          {
            id: 1,
            name: "Cyber security micro-credential for educators",
            category: "Cyber security",
            replies: 0,
            views: 8,
          },
          {
            id: 2,
            name: "Cyber security micro-credential for educators",
            category: "Cyber security",
            replies: 0,
            views: 17,
          },
          {
            id: 3,
            name: "Cyber security micro-credential for educators",
            category: "Cyber security",
            replies: 4,
            views: 0,
          },
          {
            id: 4,
            name: "Cyber security micro-credential for educators",
            category: "Cyber security",
            replies: 32,
            views: 0,
          },
        ]}
      />
    </Layout>
  )
}

export default Forum
export const data = {
  title: "Available Forums",
}
