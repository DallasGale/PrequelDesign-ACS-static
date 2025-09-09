import React from "react"

import Layout from "./layout.11ty"
import Card from "./_includes/components/card/index.11ty"

const StudentDashboard = ({title}) => {
  return (
    <Layout>
      <h1 className="display1">{title}</h1>

      <div className="card-grid">
        <Card
          heading="Cyber security micro-credential for educators"
          image="/assets/images/CourseTile_ACS.png"
        />
        <Card
          heading="Cyber security micro-credential for educators"
          image="https://placehold.co/400x450/001b73/FFF?text=400x450&font=roboto"
        />
        <Card
          heading="Cyber security micro-credential for educators"
          image="https://placehold.co/400x450/001b73/FFF?text=400x450&font=roboto"
        />
        <Card
          heading="Cyber security micro-credential for educators"
          image="https://placehold.co/400x450/001b73/FFF?text=400x450&font=roboto"
        />
        <Card
          heading="Cyber security micro-credential for educators"
          image="https://placehold.co/400x450/001b73/FFF?text=400x450&font=roboto"
        />
      </div>
    </Layout>
  )
}

export default StudentDashboard
export const data = {
  title: "Browse Courses",
}
