import { useEffect, useState } from "react";
import { mockData } from "./mockData.js";
import Shimmer from "./Shimmer.jsx";
import { useParams } from "react-router-dom";

const RestrauntMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => fetchMenu(), []);
  const {resID}= useParams();
  console.log(resID)
  
  // console.log(resID)

  const fetchMenu = () => {
    const data = mockData(resID);

    setResInfo(data);
  };

  if (resInfo == null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.data.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
      .card;
  // const formattedPrice = itemCards?.card?.info?.price ? price /100 : 'N/A'
  console.log(itemCards);
  return (
    <div className="res-menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")}- {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          const formattedPrice = item?.card?.info?.price
            ? item?.card?.info?.price / 100
            : "N/A";
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
