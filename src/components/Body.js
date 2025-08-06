import RestCard from "./RestCard";
import { resList } from "../utils/data";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);
  return (
    <div className="body">
      <div className="input-filed">
        <input type="search" />
      </div>
      <div className="filter-btn-wrapper">
        <button
          className="filter-btn"
          onClick={() => {
            setRestaurantList(resList.filter((res) => res.rating > 4.7));
          }}
        >
          filter button
        </button>
      </div>
      <div className="res-card-container">
        {restaurantList.map((restaurant) => {
          return <RestCard key={restaurant.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
