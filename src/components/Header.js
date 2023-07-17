import { useState } from "react"
import {LOGO_URL} from "../utils/constants"
import { useState } from "react";
import { Link } from "react-router-dom";
const Header=()=>{
   const [LoginBtn,setLoginBtn]=useState("Login");
    return(
     <div className="header">
        <div>
            <img  className="logo"
            src={LOGO_URL} />
        </div>
        <div className="nav-item">
     <ul>
        <li>
         <Link to="/">Home</Link>
         </li>
        <li>
         <Link to="/about">About us</Link></li>
        <li>
         <Link to="/contacts">Contact Us</Link></li>
        <li>Cart</li>
        <button className="state-btn" onClick={()=>{
        LoginBtn == "Login"  ? setLoginBtn("Logout") :
        setLoginBtn("Login")
        }}>{LoginBtn}</button>
     </ul>
        </div>
     </div>       
    )
}

export default Header;