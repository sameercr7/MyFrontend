import {CARD_IMG} from "../utils/constants"
const ResCard=(props)=>{
    const {resdata}=props;
    const {
     name,cuisines,area,avgRating,cloudinaryImageId
    }=resdata?.data;
     return(
         <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
           <img  className="res-logo"
           alt="lolo"
            src={CARD_IMG+cloudinaryImageId}
 
            />
      
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{area}</h4>
       
         </div>
     )
 }

 export default ResCard;