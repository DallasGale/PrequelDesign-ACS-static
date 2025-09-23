import React from "react"
import MobileMenu from "../mobileMenu/index.11ty"

const Header = ({isLoggedIn}) => {
  console.log({isLoggedIn})
  return (
    <header className="header">
      <a href="/login">
        <img src="/assets/logo.png" alt="ACS" className="header__img" />
      </a>
      <div className="header__menu-wrapper">
        {isLoggedIn && (
          <>
            <button className="header__menu" id="mobile-menu-trigger">
              <div className="initials">TI</div>
            </button>
            <MobileMenu />
          </>
        )}
      </div>
    </header>
  )
}
export const data = {
  permalink: false,
  isLoggedIn: false,
}
export default Header
