import { SwiggyAPI } from "./Constants.jsx";
import RestrauntCard, { withDiscountLabel } from "./RestrauntCard.jsx";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.jsx";
import { Link } from "react-router-dom";
import useGetRestraunts from "../utils/useGetRestraunts";
import useOnlineStatus from "../utils/useOnlineStatus";

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
  const allRestraunt = useGetRestraunts();

  console.log(allRestraunt);

  useEffect(() => {
    setFilteredRestraunt(allRestraunt);
  }, [allRestraunt]);

  const RestrauntCardDiscount = withDiscountLabel(RestrauntCard);

  if (!allRestraunt) return null;
  //Early Return

  if (useOnlineStatus() == false) return <h1>Seems like you are offline</h1>;

  return allRestraunt.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="user-filters m-4 flex gap-5">
        <input
          className="border-[2px] "
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
          className="bg-pink-100 hover:bg-pink-200 rounded-md p-1"
        >
          Search
        </button>

        <button
          onClick={() => {
            const data = showTopRestraunts(filteredRestraunt);
            setFilteredRestraunt(data);
          }}
          className="bg-blue-100 hover:bg-blue-200 rounded-md p-1"
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
      <div className="restraunt-List flex gap-4 flex-wrap m-3">
        {filteredRestraunt.map((res) => (
          <Link
            key={res.info.id}
            to={"restraunts/" + res.info.id}
            style={{ textDecoration: "none", color: "black" }}
          >
            {res.info.aggregatedDiscountInfoV3?.subHeader =="AT ₹99" ? (
              <RestrauntCardDiscount {...res.info} />
            ) : (
              <RestrauntCard {...res.info} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
