import { useEffect, useState } from "react";
import { mockData } from "../src/mockData.js";

const useRestrauntMenu = (resID) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
    return () => {
      console.log("cleanup called");
    };
  }, [resID]);

  const fetchMenu = () => {
    const data = mockData(resID);

    setResInfo(data);
  };
  return resInfo;
};

export default useRestrauntMenu;
