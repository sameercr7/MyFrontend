import ResCard,{WithPromotedLabel} from "./ResCard";
import { useEffect, useState } from "react";
import { resLiso } from "../utils/mockData";
import Shier from "./Shimer";
import { Link } from "react-router-dom";
const Body=()=>{
    // console.log("Rereder")
    useEffect(()=>{FetchData()},[])
    // const ListRestraunts=[];

    const [m,setm]=useState([])
    const[m1,setm1]=useState([])
    const RestaurantPromotedLabel=WithPromotedLabel(ResCard);
    const [sea,setsea]=useState("")
    const FetchData=async ()=>{
     


        
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
          );

        // const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9185038&lng=80.9588803&page_type=DESKTOP_WEB_LISTING");
        const jso=await data.json()
        console.log(jso);
       
        setm(jso?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // we are initiallizing the duplicate array
        setm1(jso?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  
    };
     if(!m || m.length === 0 || m1.length ===0 || !m1){
            return   <Shier/>
    //   return <h1>Loading...</h1>
    }
      return(   

        <div className="body">

<div className="flex">
    <div className="search m-4 p-4">
        <input type="text" className="border-solid border-black" value={sea} 
        onChange={(e)=>{
       setsea(e.target.value)
        }} />
        
        
        <button className="px-3 mx-3 bg-green-200 rounded-md"
         onClick={()=>{
            // so we need search text
            // console.log(sea)
            
           const filto= m.filter((y)=>y.info.name.toLowerCase().includes(sea.toLowerCase()))
           setm1(filto);
        }}>Search</button>

    </div>
    <div className="py-8 mx-3">
    <button className="px-3 mx-3 bg-green-200 rounded-md"
        onClick={()=>{
            const realLiso =m.filter(
       (res)=> res.info.avgRating > 4
       );
       console.log(realLiso)
       setm1(realLiso);
    //    console.log(reaLiso)
    }}>Click to see the Restaurant</button>
    </div>
       
</div>
    <div className="flex flex-wrap">
{/*        
        <ResCard   
         resdata={resLiso[0]}/>
       <ResCard   
         resdata={resLiso[1]}/>
         <ResCard   
         resdata={resLiso[2]}/> */}
{
    //  resLiso.map((x) => ( <ResCard key={x.data.id} resdata={x}  />  ))
    m1.map((x) => (<Link  key={x?.info.id} to={"/restaurant/"+x?.info.id}>

   {x?.info.promoted ?(<RestaurantPromotedLabel resdata={x?.info}/>): (<ResCard  resdata={x?.info}  />)}
    </Link> ))
}       
    </div>

    </div>
)}
export default Body;





