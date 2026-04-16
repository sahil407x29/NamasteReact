import { useState, useEffect } from "react";
import { SwiggyAPI } from "../src/Constants.jsx";

const useGetRestraunts = () => {
 
  const [allRestraunt, setAllRestraunt] = useState([]);

  useEffect(() => {
    getRestraunts();
  }, []);
 
  async function getRestraunts() {
    const response = await fetch(SwiggyAPI);
    const Swiggydata = await response.json();

    // return  data
    setAllRestraunt(
      Swiggydata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    
  }
  return {allRestraunt};
};

export default useGetRestraunts;
