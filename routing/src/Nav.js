import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  //edit the link color and style, add the style to links after
  const navStyle ={
      color: 'white'
  }

  return (
    
    <nav>
        <h3> Logo WHERE ???</h3>
        <ul className={"nav-links"}>
            <Link style={navStyle} to= "/"> <li> Home </li> </Link>
            <Link style={navStyle} to= "/about"> <li> About </li> </Link>
            <Link style={navStyle} to= "/shop"> <li> Shop </li> </Link>
            <Link style={navStyle} to= "/calendar"> <li> Calendar </li> </Link>

        </ul>
    </nav>
  );
}

export default Nav;
