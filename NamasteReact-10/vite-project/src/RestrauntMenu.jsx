
import Shimmer from "./Shimmer.jsx";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "/utils/useRestrauntMenu.jsx"
import RestrauntCategories from "./RestrauntCategories.jsx"
const RestrauntMenu = () => {
 
  const { resID } = useParams();
  const resInfo = useRestrauntMenu(resID)
 

  if (resInfo == null) return <Shimmer />
  const { name, cuisines, costForTwoMessage } =
    resInfo?.data.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
      .card;

  console.log('menu',resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      )
  const categories = resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> {
    return c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    // ["@type"]  this is how to access a special character prohibited in js , this is the same as .@type
  }
  )
  console.log("Categories",categories)

  return (
    <div className="text-center">
      <h1 className='font-bold'>{name}</h1>
      <p>
        {cuisines.join(", ")}- {costForTwoMessage}
      </p>
      { 
      
        categories.map(
          (category) => <RestrauntCategories data={category?.card?.card}/>
        )
        
      }
      <h2>Menu</h2>
      
    </div>
  );
};

export default RestrauntMenu;
