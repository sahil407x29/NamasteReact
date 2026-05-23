import ItemList from "./ItemList.jsx";
import { useState } from "react";

const RestrauntCategories = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const [Arrow, setArrow] = useState("⬇️");
  function DisplayItems() {
    setShowItems(!showItems);
    if (Arrow == "⬇️") {
      setArrow("⬆️");
    } else {
      setArrow("⬇️");
    }
  }

  return (
    <div className=" cursor-pointer w-[50%] mx-auto my-4 bg-gray-50 shadow-xl p-4">
      <div onClick={DisplayItems} className="flex justify-between">
        <span>
          {data?.title}
          {`(${data?.itemCards.length})`}
        </span>
        <button>{Arrow}</button>
      </div>

      {showItems && <ItemList data={data?.itemCards} />}
    </div>
  );
};

export default RestrauntCategories;
