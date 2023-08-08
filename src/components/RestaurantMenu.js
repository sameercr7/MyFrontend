
import Shier from "./Shimer";

 import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu=()=>{
    const {resId}=useParams();

// --------------we have used the custom hook to make the component Light weight------------

    // const params=useParams();
    // console.log(params);
//     const [resInfo,setresInfo] = useState(null);
//     useEffect(()=>{
//         menufetch();
//     },[])
//     const menufetch=async()=>{
//         const data =await fetch(
// Res_ID + resId
//         );
//         const json=await data.json();
//         console.log(json);
//         setresInfo(json.data)
//     }
const resInfo=useRestaurantMenu(resId);

  if(resInfo == null) return <Shier />

   const {itemCards}=
   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
   const {cuisines,name,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info || {};

    return(
        <div className="menu">
            <h2>{name}</h2>
            <p>
                {cuisines.join(", ")}- {costForTwoMessage}
            </p>
            <h1>Menu</h1>
            <ul>
                {itemCards && itemCards.map( (x) =>( <li  key={x.card.info.id}>
                    {x.card.info.name} - {"Rs"} {x.card.info.defaultPrice/100 || x.card.info.price/100}
                    </li>
                        ))}
                {/* <li>{itemCards[0].card.info.name}</li> */}
               
            </ul>
        </div>

    )
}
export default RestaurantMenu;