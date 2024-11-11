import React from 'react'

import {NavBar} from './navbar/NavBar'
 import logo from "../../assets/Images/PureLeaf.jpg";

export const Header = () => {
    return (
        <div>
          {/* <img src={logo} alt="Logo" style={{ width: "100px", height: "100px" }} />
          <h1>PureLeaf</h1> */}

          <NavBar/>   
        </div>
    )
}
