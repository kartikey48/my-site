import React from "react";

function Navbar() {
  return (
    <div class="page-wrapper">
 <div class="nav-wrapper">
  <div class="grad-bar"></div>
  <nav class="navbar">
    <div class="logo">
    <h2>BANG FOOD</h2>
    </div>
    <div class="menu-toggle" id="mobile-menu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
    <ul class="nav no-search">
      <li class="nav-item"><a href="#">Home</a></li>
      <li class="nav-item"><a href="#">About</a></li>
      <li class="nav-item"><a href="#">Work</a></li>
      <li class="nav-item"><a href="#">Careers</a></li>
      <li class="nav-item"><a href="#">Contact Us</a></li>
      <i class="fas fa-search" id="search-icon"></i>
      <input class="search-input" type="text" placeholder="Search.." />
    </ul>
  </nav>
  </div>

</div>
  );
}

export default Navbar;
