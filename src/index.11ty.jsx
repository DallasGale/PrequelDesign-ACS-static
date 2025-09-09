import React from "react"

import Layout from "./layout.11ty"
import Sidebar from "./_includes/components/sidebar/index.11ty"
import Header from "./_includes/components/header/index.11ty"

const Index = ({title}) => {
  return (
    <Layout>
      <Header />
      <main className="page-wrapper">
        <Sidebar />
        <h1>{title}</h1>
      </main>
    </Layout>
  )
}

export default Index
export const data = {
  title: "ACS - Entersoft",
}
