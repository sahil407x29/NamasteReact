import { useState, useEffect } from "react";
import { SwiggyAPI } from "../src/Constants.jsx";

const useGetRestraunts = () => {
  const [filteredRestraunt, setFilteredRestraunt] = useState([]);
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
    setFilteredRestraunt(
      Swiggydata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  }
  return [allRestraunt,filteredRestraunt]
};

export default useGetRestraunts;
