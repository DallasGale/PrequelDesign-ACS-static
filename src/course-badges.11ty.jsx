import React from "react"
import Layout from "./layout.11ty"
import Card from "./_includes/components/card/index.11ty"

const CourseBadges = ({title}) => {
  return (
    <Layout>
      <h1 className="display1">{title}</h1>
      <div className="card-bg generic-page">
        <div className="generic-page__content">
          {/* <p>Please complete a course to earn a certificate.</p> */}

          {/* <div className="card-grid">
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
          </div> */}
        </div>
      </div>
    </Layout>
  )
}

export default CourseBadges
export const data = {
  title: "Course Badges",
}
