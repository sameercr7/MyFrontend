import { useState } from "react"
import {LOGO_URL} from "../utils/constants"
import { useState } from "react";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/UseOnlineStatus";
const Header=()=>{
   const [LoginBtn,setLoginBtn]=useState("Login");
   const status=UseOnlineStatus();
    return(
     <div className="flex  justify-between  bg-green-200 shadow-md" >
        <div>
            <img  className="w-12  m-4"
            src={LOGO_URL} />
        </div>
        <div className="flex items-center">
     <ul className="flex px-3 ">
     <li className="px-3">
         Online Status:{status ? "😀" : "😀😀"}
      </li>
        <li className="px-3">
         <Link to="/">Home</Link>
         </li>
        <li className="px-3">
         <Link to="/about">About us</Link></li>
        <li>
         <Link to="/contacts">Contact Us</Link></li>
        <li className="px-3">Cart</li>
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