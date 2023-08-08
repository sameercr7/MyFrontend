import { useEffect, useState } from "react";

const UseOnlineStatus=()=>{
  
   const [Status,setStatus]=useState(true);

   useEffect(()=>{
    window.addEventListener("offline",()=>{
        setStatus(false);
    })
    window.addEventListener("online",()=>{
        setStatus(true);
    })

   },[])



    return Status;
}

export default UseOnlineStatus;