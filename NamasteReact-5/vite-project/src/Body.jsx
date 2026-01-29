import { restrauntList } from "./Constants";
import RestrauntCard from "./RestrauntCard.jsx";
import { useEffect, useState } from "react";
function filterData(searchText, restraunt) {
 const FilteredData =  restraunt.filter((res) => res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
 return FilteredData;
}
const Body = () => {
  //let searchText = "hello"
  const [searchText, setSearchText] = useState(""); // returns [variable name , function to update the variable]
  //  console.log(searchText)
  const [restraunt, setRestraunt] = useState(restrauntList);

  return (
    <>
      
      <input
        type="text"
        placeholder=""
        value={searchText}
        //only doing this will not update the value becuase react does not keep tract of JS variables and
        // one way data-binding
        onChange={(e) => setSearchText(e.target.value)}
      />{" "}
      
      {/* <h1>{searchText}</h1>  */}
      <button onClick={()=> {const data = filterData(searchText,restraunt)
        setRestraunt(data)}
      }>search</button>
      {/* <h1>{Status}</h1> */}
      <div className="restraunt-List">
        {restraunt.map((restraunt) => {
          return (
            <RestrauntCard
              // unique key >>> index key >>>>>>>> no key
              key={restraunt.info.id}
              {...restraunt.info}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
