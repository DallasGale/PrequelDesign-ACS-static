import React from "react"
import MobileMenu from "../mobileMenu/index.11ty"

const Header = ({menu}) => {
  return (
    <header className="header">
      <a href="/login">
        <img src="/assets/logo.png" alt="ACS" className="header__img" />
      </a>
      {menu && (
        <>
          <button className="header__menu d-none d-md-none d-lg-block">
            <div className="initials">TI</div>
          </button>
          <div className="header__menu-wrapper  d-md-block d-lg-none">
            <button className="header__menu" id="mobile-menu-trigger">
              <div className="initials">TI</div>
            </button>

            <MobileMenu />
          </div>
        </>
      )}
    </header>
  )
}
export const data = {
  permalink: false,
  menu: true,
}
export default Header
