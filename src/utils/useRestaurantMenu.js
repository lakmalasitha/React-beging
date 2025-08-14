import { useEffect, useState } from "react";
import { API_CONFIG } from "./constants";

const useRestaurantMenu = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_CONFIG.url, { headers: API_CONFIG.headers });
    const json = await data.json();

    const path = json?.record?.resList?.find((r) => r.id === parseInt(id));
    setRestaurant(path);
    if (!path) return <h1>restaurant not found</h1>;
  };
  return restaurant;
};

export default useRestaurantMenu;
