import { useEffect, useState } from "react";
import { MENU_url } from "../utils/constants";

const RestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_url + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default RestaurantMenu;
