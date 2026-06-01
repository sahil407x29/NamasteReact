import Shimmer from "./Shimmer.jsx";
import {useState} from 'react'
import { useParams } from "react-router-dom";
import useRestrauntMenu from "/utils/useRestrauntMenu.jsx";
import RestrauntCategories from "./RestrauntCategories.jsx";
const RestrauntMenu = () => {
  const { resID } = useParams();
  const resInfo = useRestrauntMenu(resID);
  const [showIndex,setShowIndex] = useState(null)

  if (resInfo == null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.data.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
      .card;

  const categories =
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        return (
          c.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
        // ["@type"]  this is how to access a special character prohibited in js , this is the same as .@type
      },
    );

  console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold">{name}</h1>
      <p>
        {cuisines.join(", ")}- {costForTwoMessage}
      </p>
      {categories.map((category,index) => (
        <RestrauntCategories
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index==showIndex?true:false}
          setShowIndex={()=>
            
            setShowIndex(showIndex === index ? null : index)
            
          }
        />
      ))}
      <h2>Menu</h2>
    </div>
  );
};

export default RestrauntMenu;
