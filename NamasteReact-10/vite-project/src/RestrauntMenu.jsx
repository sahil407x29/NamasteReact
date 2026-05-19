
import Shimmer from "./Shimmer.jsx";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "/utils/useRestrauntMenu.jsx"

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
    <div className="res-menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")}- {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => {
          const formattedPrice = item?.card?.info?.price
            ? item?.card?.info?.price / 100
            : "N/A";
             //formattedPrice is declared outSide return() becuase JSX only expects expressions and not statements git 
          return (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name}- Rs {formattedPrice}
            </li>
          );
        })}
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default RestrauntMenu;
