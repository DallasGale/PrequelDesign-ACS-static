import React from "react"
import Header from "./_includes/components/header"
export default function Layout({children}) {
  return (
    <html lang="en">
      <head>
        <title>My Site</title>
        <link rel="stylesheet" href="/css/app.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <script src="/js/app.js"></script>
      </body>
    </html>
  )
}

export const data = {
  children: React.ReactNode,
}
