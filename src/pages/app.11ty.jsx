import React from "react"

import Layout from "../layout.11ty"
import Header from "../_includes/components/header"
import Sidebar from "../_includes/components/sidebar"

const App = ({title}) => {
  return (
    <Layout>
      <Header />
      <section className="page-content">
        <Sidebar />
        <h1>{title}</h1>
      </section>
    </Layout>
  )
}

export default App
export const data = {
  title: "ACS - Entersoft",
}
