import React from 'react'

import Search from "./Search";

const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <span className="header__logo">My Own Netflix</span>
        <Search/>
      </div>
    </div>
  )
}
export default Header;