import React from "react"

const Header = () => {
  return (
    <header className="header">
      <img src="/assets/logo.png" alt="ACS" className="header__img" />
      <button className="header__menu">
        <div className="initials">TI</div>
      </button>
    </header>
  )
}
export const data = {
  permalink: false,
}
export default Header
