import React from 'react'

function HeaderTop() {
  return (
    <div class="header_top container mx-auto display-flex">
      <div className="logo">
        <img src="../images/logo-v2 1 (1).png" alt="" />
      </div>
      <div className="manu">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Work</a></li>
          <li><a href="">premium products</a></li>
          <li><a href="">Blog</a></li>
          <button>Start a Proejct</button>
        </ul>
      </div>
    </div>
  )
}

export default HeaderTop