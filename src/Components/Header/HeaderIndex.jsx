import React from 'react'
import "./Header.css"
import HeaderBottom from './HeaderBottom'
import HeaderMeddle from './HeaderMeddle'
import HeaderTop from './HeaderTop'

function HeaderIndex() {
  return (
    <div >
        <HeaderTop />
        <HeaderMeddle />
        <HeaderBottom />
    </div>
  )
}

export default HeaderIndex