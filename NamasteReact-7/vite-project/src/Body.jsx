import { SwiggyAPI } from "./Constants.jsx";
import RestrauntCard from "./RestrauntCard.jsx";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.jsx";
import {Link} from "react-router-dom"

function filterData(searchText, allRestraunt) {
  return allRestraunt.filter((res) =>
    res.info?.name.toLowerCase().includes(searchText.toLowerCase()),
  );
}
// function showTopRestraunts(filteredRestraunt){
//   const top = [];
//    for(let i=0;i<filteredRestraunt.length;i++) {
//     if(filteredRestraunt[i].info?.avgRating > 4.3) {
//        top.push(filteredRestraunt[i])

//     }

//    }
//    return top;
// }

function showTopRestraunts(filteredRestraunt) {
  return filteredRestraunt.filter((res) => res.info?.avgRating > 4.3);
}

const Body = () => {
  const [searchText, setSearch] = useState("");
  const [filteredRestraunt, setFilteredRestraunt] = useState([]);
  const [allRestraunt, setAllRestraunt] = useState([]);
  // const [TopRestraunts,setTopRestraunts] = useState([])

  useEffect(() => {
    getRestraunts();
  }, []);

  async function getRestraunts() {
    const response = await fetch(SwiggyAPI);
    const Swiggydata = await response.json();
    console.log(Swiggydata);
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

  console.log("working");

  if (!allRestraunt) return null;
  //Early Return

  return allRestraunt.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="user-filters">
        <input
          type="text"
          placeholder="Enter Restraunt"
          value={searchText}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />

        <button
          onClick={() => {
            const data = filterData(searchText, allRestraunt);
            setFilteredRestraunt(data);
          }}
        >
          Search
        </button>

        <button
          onClick={() => {
            const data = showTopRestraunts(filteredRestraunt);
            setFilteredRestraunt(data);
          }}
        >
          Top Restraunts
        </button>

        <button
          style={{ marginLeft: "20px" }}
          onClick={() => {
            setFilteredRestraunt(allRestraunt);
            setSearch("");
          }}
        >
          Reset Filters
        </button>
      </div>
      <div className="restraunt-List">
        {filteredRestraunt.map((res) => (
        <Link key={res.info.id} to={"restraunts/"+res.info.id} style={{textDecoration:'none',color:'black'}}><RestrauntCard {...res.info}  /> </Link> 
        ))}
      </div>
    </>
  );
};

export default Body;
