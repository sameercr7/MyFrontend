import {CARD_IMG} from "../utils/constants"
const ResCard=(props)=>{
    const {resdata}=props;
    const {
     name,cuisines,area,avgRating,cloudinaryImageId
    }=resdata;
     return(
         <div className="m-4 px-4 py-3 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-300">
           <img  className="rounded-md"
           alt="lolo"
            src={CARD_IMG+cloudinaryImageId}
 
            />
      
      <h3 className="font-bold  py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{area}</h4>
       
         </div>
     )
 }
//  HOC function
 export const WithPromotedLabel=(ResCard)=>{
    return(props)=>{
        return(
            <div>
             <label className=" absolute p-2 m-2 bg-black text-white rounded-md">Promoted</label>
             <ResCard {...props}/>
            </div>

        )
    }
 }

 export default ResCard;