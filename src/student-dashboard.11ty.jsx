import React from "react"

import Layout from "./layout.11ty"
import Card from "./_includes/components/card/index.11ty"

const StudentDashboard = ({title}) => {
  return (
    <Layout>
      <h1 className="display1">{title}</h1>

      <div className="card-grid pt-5">
        <Card
          heading="Cyber security micro-credential for educators"
          image="/assets/images/course-title-acs.png"
        />
        <Card
          heading="Cyber security micro-credential for educators"
          image="/assets/images/course-title-acs.png"
        />
        <Card
          heading="Cyber security micro-credential for educators"
          image="/assets/images/course-title-acs.png"
        />
        <Card
          heading="Cyber security micro-credential for educators"
          image="/assets/images/course-title-acs.png"
        />
        <Card
          heading="Cyber security micro-credential for educators"
          image="/assets/images/course-title-acs.png"
        />
      </div>
    </Layout>
  )
}

export default StudentDashboard
export const data = {
  title: "Browse Courses",
}
