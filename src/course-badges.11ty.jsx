import React from "react"
import Layout from "./layout.11ty"
import Card from "./_includes/components/card/index.11ty"

const CourseBadges = ({title}) => {
  return (
    <Layout>
      <div className="card-bg generic-page">
        <h1 className="display1">{title}</h1>
        <div className="generic-page__content">
          {/* <p>Please complete a course to earn a certificate.</p> */}

          <div className="badge-grid">
            <div className="badge-row">
              <img src="../assets/images/badge.png" alt="" width="100%" />
            </div>
            <div className="badge-row">
              <img src="../assets/images/badge.png" alt="" width="100%" />
            </div>
            <div className="badge-row">
              <img src="../assets/images/badge.png" alt="" width="100%" />
            </div>
            <div className="badge-row">
              <img src="../assets/images/badge.png" alt="" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CourseBadges
export const data = {
  title: "Course Badges",
}
