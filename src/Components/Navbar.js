import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Typography } from "@mui/material";
import './Nav.css'
import { ConnectKitButton } from "connectkit"


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo" style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          {/* <p style={{fontSize:18,fontFamily:'Helvetica',fontWeight:600}}>Woodie</p> */}
          <Typography
  variant="h6"
  align="left"
  color="grey.700"
  sx={{
    backgroundcolor: "primary",
    backgroundImage: `linear-gradient(45deg, #90BBA1, #437137)`,
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }}
>
  ZKP
</Typography>   
          
        </div>
       
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <ConnectKitButton/>

      </div>
    </nav>
  )

  

  
}


export default Navbar