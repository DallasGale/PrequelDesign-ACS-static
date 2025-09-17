import React from "react"

import Layout from "./layout.11ty"
import CourseList from "./_includes/components/courseList/index.11ty"
import SelectInput from "./_includes/components/selectInput/index.11ty"
import TextInput from "./_includes/components/textInput/index.11ty"
import SecondaryButton from "./_includes/components/secondaryButton/index.11ty"

const Forum = ({title}) => {
  return (
    <Layout>
      <div className="card-bg generic-page">
        <h1 className="display1">{title}</h1>
        <div className="generic-page__content">
          <div className="row">
            <div className="col-6">
              <SelectInput label="Courses" placeholder="Select Course" />
            </div>
            <div className="col-6 d-flex justify-content-end align-items-end">
              <div className="btn-group">
                <SecondaryButton label="Latest" />
                <SecondaryButton label="Unread" />
                <SecondaryButton label="Most Viewed" />
              </div>
            </div>
            <div className="col-12 mt-3 mb-3">
              <TextInput label="Search" search={true} />
            </div>
          </div>
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
        </div>
      </div>
    </Layout>
  )
}

export default Forum
export const data = {
  title: "Available Forums",
}
