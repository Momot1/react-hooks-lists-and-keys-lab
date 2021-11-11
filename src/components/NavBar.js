import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkElements = links.map(link => {
    const href = `#${link}`
    return (
      <a href = {href} key = {link}>{link}</a>
  )})

  return <nav>{linkElements}</nav>;
}

export default NavBar;
