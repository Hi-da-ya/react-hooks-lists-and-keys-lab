import React from "react";


function NavBar() {
  const links = ["home", "about", "projects"];
  const navItems = links.map((item) => (
      <a key={item} href={`#${item}?key=value` } >{item}</a>
  ))

  return <nav>{/* display an <a> tag for each link here */}
 {navItems}
  
  </nav>;
}

export default NavBar;
