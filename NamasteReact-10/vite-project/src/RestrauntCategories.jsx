import ItemList from "./ItemList.jsx";
import { useState } from "react";

const RestrauntCategories = ({ data,showItems,setShowIndex }) => {
  // this component is now an controlled component as it is being controlled 
  // by its parents RestrauntMenu
  // this is used to control a childElement from its parent through passing props which results often in nesting
  // which is regarded as props drilling 
  // to solve this we have Context in react
  // const [showItems, setShowItems] = useState(false);
  const [Arrow, setArrow] = useState("⬇️");
  function DisplayItems() {
    // setShowItems(!showItems);
    setShowIndex()
    // if (Arrow == "⬇️") {
    //   setArrow("⬆️");
    // } else {
    //   setArrow("⬇️");
    // }
  }

  return (
    <div className=" cursor-pointer w-[50%] mx-auto my-4 bg-gray-50 shadow-xl p-4">
      <div onClick={DisplayItems} className="flex justify-between">
        <span>
          {data?.title}
          {`(${data?.itemCards.length})`}
        </span>
        <button>{showItems?"⬆️":"⬇️"}</button>
      </div>
      
      {showItems && <ItemList data={data?.itemCards} />}
    </div>
  );
};

export default RestrauntCategories;
