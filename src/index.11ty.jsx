// src/index.11ty.jsx
import React from "react"
import Layout from "./layout.11ty"

export default function Index({title}) {
  return (
    <Layout>
      <h1>{title}</h1>
      <p>This should work now.</p>
    </Layout>
  )
}

export const data = {
  title: "My JSX Site",
}
