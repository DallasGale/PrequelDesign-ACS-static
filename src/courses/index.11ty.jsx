// src/index.11ty.jsx
import React from "react"
import Layout from "../layout.11ty"

export default function Courses({title}) {
  return (
    <Layout>
      <h1>{title}</h1>

      <button id="test">Test</button>
    </Layout>
  )
}

export const data = {
  title: "Courses",
}
