import React from "react"
import Header from "./_includes/components/header/index.11ty"
import Footer from "./_includes/components/footer/index.11ty"

export default function BaseLayout({children, menu}) {
  return (
    <html lang="en">
      <head>
        <title>ACS - Entersoft</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
          crossorigin="anonymous"
        />
        <link
          href=" https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
          rel="stylesheet"
          crossorigin="anonymous"
        />

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

        <script
          src="
https://cdn.jsdelivr.net/npm/fullcalendar@6.1.19/index.global.min.js
"
        ></script>
        <script type="module" src="/js/calendar.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
          crossorigin="anonymous"
        ></script>
      </head>
      <body>
        <Header menu={menu} />
        <main className="page-wrapper">{children}</main>
        <Footer />
        <script type="module" src="/js/app.js"></script>
        <script type="module" src="/js/settings.js"></script>
        <script type="module" src="/js/common.js"></script>
        <script type="module" src="/js/profilePhoto.js"></script>
      </body>
    </html>
  )
}

export const data = {
  menu: false,
  children: React.ReactNode,
}
