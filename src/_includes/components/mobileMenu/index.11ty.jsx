import React from "react"
import Sidebar from "../sidebar/index.11ty"

const MobileMenu = () => {
  return (
    <div id="mobile-menu" className="mobile-nav">
      <Sidebar isHeaderMenu />
    </div>
  )
}

export default MobileMenu
