import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import { resLiso } from "../utils/mockData";
import Shier from "./Shimer";
import { Link } from "react-router-dom";
const Body=()=>{
    // console.log("Rereder")
    useEffect(()=>{FetchData()},[])
    const FetchData=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9185038&lng=80.9588803&page_type=DESKTOP_WEB_LISTING");
        const jso=await data.json()
        console.log(jso);
       
        setm(jso.data.cards[2].data.data.cards)
        // we are initiallizing the duplicate array
        setm1(jso.data.cards[2].data.data.cards)
  
    };
    const [sea,setsea]=useState("")
    
    // const ListRestraunts=[];
    const [m,setm]=useState([])
    const[m1,setm1]=useState([])

    if(m.length == 0){
            return   <Shier/>
    //   return <h1>Loading...</h1>
    }
      return(   

        <div className="body">

<div className="filter-btn">
    <div className="search">
        <input type="text" className="sea-btn" value={sea} 
        onChange={(e)=>{
       setsea(e.target.value)
        }} />
        
        
        <button onClick={()=>{
            // so we need search text
            // console.log(sea)
            
           const filto= m.filter((y)=>y.data.name.toLowerCase().includes(sea.toLowerCase()))
           setm1(filto);
        }}>Search</button>

    </div>
       <button className="search-btn"
        onClick={()=>{
            const realLiso =resLiso.filter(
       (res)=> res.data.avgRating > 4
       );
    //    console.log(resLiso)
       setm(realLiso);
    //    console.log(reaLiso)
    }}>Click to see the Restaurant</button>
</div>
    <div className="Res-Container">
{/*        
        <ResCard   
         resdata={resLiso[0]}/>
       <ResCard   
         resdata={resLiso[1]}/>
         <ResCard   
         resdata={resLiso[2]}/> */}
{
    //  resLiso.map((x) => ( <ResCard key={x.data.id} resdata={x}  />  ))
    m1.map((x) => (<Link  key={x.data.id} to={"/restaurant/"+x.data.id}> <ResCard  resdata={x}  /> </Link> ))
}       
    </div>

    </div>
)}
export default Body;





