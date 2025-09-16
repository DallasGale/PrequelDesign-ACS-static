import React from "react"
import MobileMenu from "../mobileMenu/index.11ty"

const Header = () => {
  return (
    <header className="header">
      <a href="/login">
        <img src="/assets/logo.png" alt="ACS" className="header__img" />
      </a>
      <div className="header__menu-wrapper">
        <button className="header__menu" id="mobile-menu-trigger">
          <div className="initials">TI</div>
        </button>

        <MobileMenu />
      </div>
    </header>
  )
}
export const data = {
  permalink: false,
}
export default Header
