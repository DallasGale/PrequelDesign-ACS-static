import React from "react"

import Layout from "./layout.11ty"

const MyCertificate = ({title}) => {
  return (
    <Layout>
      <h1 className="display1">{title}</h1>
    </Layout>
  )
}

export default MyCertificate
export const data = {
  title: "My Certificates",
}
