import React from "react"
import Sidebar from "./_includes/components/sidebar/index.11ty"
import BaseLayout from "./baseLayout.11ty"

export default function Layout({children}) {
  return (
    <BaseLayout isLoggedIn={true}>
      <Sidebar />
      <section className="page-content">{children}</section>
    </BaseLayout>
  )
}

export const data = {
  children: React.ReactNode,
}
