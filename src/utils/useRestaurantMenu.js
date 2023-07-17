import { useEffect, useState } from "react";
import { Res_ID } from "../utils/constants";
const useRestaurantMenu=(resId)=>{



    const [resInfo,setresInfo] = useState(null);
    useEffect(()=>{
        menufetch();
    },[])
    const menufetch=async()=>{
        const data =await fetch(
Res_ID + resId
        );
        const json=await data.json();
        console.log(json);
        setresInfo(json.data)
    }


    return resInfo;
}

export default useRestaurantMenu;