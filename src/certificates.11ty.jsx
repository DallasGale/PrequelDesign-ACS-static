import React from "react"

import Layout from "./layout.11ty"
import Sidebar from "./_includes/components/sidebar"
import Header from "./_includes/components/header"

const Badges = ({title}) => {
  return (
    <Layout>
      <Header />
      <main className="page-content">
        <Sidebar />
        <h1>{title}</h1>
      </main>
    </Layout>
  )
}

export default Badges
export const data = {
  title: "ACS - Entersoft - Badges",
}
