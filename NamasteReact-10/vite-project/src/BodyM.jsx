// import RestrauntCard from "./RestrauntCard";
// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";
// import { SwiggyAPI } from "./Constants";

// function filteredRestraunt(searchText, restrauntList) {
//   return restrauntList.filter((res) =>
//     res.info?.name.toLowerCase().includes(searchText.toLowerCase()),
//   );
// }
// const Body = () => {


//   const [searchText, setSearchText] = useState("");
//   const [restraunt, setRestraunt] = useState([]);
//   const [allRestraunt, setAllRestraunt] = useState([]);

//   useEffect(() => {
//     getRestraunts();
//   }, []);


//   async function getRestraunts() {
//     const response = await fetch(SwiggyAPI);
//     const Swiggydata = await response.json();

//     setRestraunt(
//       Swiggydata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
//         ?.restaurants,
//     );

//     setAllRestraunt(
//       Swiggydata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
//         ?.restaurants,
//     );
// }
//     return allRestraunt.length==0 ? <Shimmer/> :
//     // return condition ? A : B
     
//     <>
//     <input
//       type="text"
//       placeholder="Enter your restraunt"
//       value={searchText}
//       onChange={(e) => {
//         setSearchText(e.target.value);
//       }}
//     />

//     <button
//       onClick={() => {
//         const data = filteredRestraunt(searchText, allRestraunt);
//         setRestraunt(data)
//       }}
//     >
//       Search
//     </button> 
    
//      <div className="restraunt-List">
         
//          { restraunt.map((res)=> 
//             <RestrauntCard {...res.info} key={res.info.id}/>
//         )
//     }
//      </div>

 

//      </>
  
// };

// export default Body;
