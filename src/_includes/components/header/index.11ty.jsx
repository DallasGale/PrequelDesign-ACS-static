import React from "react"

const Header = ({menu}) => {
  return (
    <header className="header">
      <a href="/login">
        <img src="/assets/logo.png" alt="ACS" className="header__img" />
      </a>
      {menu && (
        <button className="header__menu">
          <div className="initials">TI</div>
        </button>
      )}
    </header>
  )
}
export const data = {
  permalink: false,
  menu: true,
}
export default Header
