import React from "react"

export default function Layout({children}) {
  return (
    <html lang="en">
      <head>
        <title>My Site</title>
        <link rel="stylesheet" href="/css/styles.css" />
      </head>
      <body>
        <section>{children}</section>
        <script src="/js/app.js"></script>
      </body>
    </html>
  )
}

export const data = {
  children: React.ReactNode,
}
