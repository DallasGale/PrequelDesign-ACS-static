import React from "react"
import Layout from "./layout.11ty"
import BadgeRow from "./_includes/components/badgeRow/index.11ty"

const CourseBadges = ({title}) => {
  return (
    <Layout>
      <div className="card-bg generic-page">
        <h1 className="display1">{title}</h1>
        <div className="generic-page__content">
          <div className="badge-grid">
            <BadgeRow />
            <BadgeRow />
            <BadgeRow />
            <BadgeRow />
            <BadgeRow />
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
