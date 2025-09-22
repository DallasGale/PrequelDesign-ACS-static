import React from "react"

import Layout from "./layout.11ty"
import Card from "./_includes/components/card/index.11ty"

const StudentDashboard = ({title}) => {
  return (
    <Layout>
      <div className="card-bg generic-page">
        <h2 className="display1">Enrolled Courses</h2>
        <div className="generic-page__content mb-5">
          <div className="card-grid">
            <Card
              heading="Cyber security micro-credential for educators"
              image="/assets/images/course-title-acs.png"
            />
          </div>
        </div>

        <h2 className="display1">Browse Courses</h2>
        <div className="generic-page__content">
          <div className="card-grid">
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
        </div>
      </div>
    </Layout>
  )
}

export default StudentDashboard
export const data = {
  title: "Browse Courses",
}
