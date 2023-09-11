import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{
    /* display an <a> tag for each link here */
    <div>
       <a href="#home"  key={0}></a>
       <a href='#about' key={1}></a>
       <a href='#projects'></a>
    </div>
    
    }</nav>;
}

export default NavBar;
