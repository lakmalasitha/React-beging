# parcel watching : file waitching algorithem

# caching - parce give fast developing experince

# parcel withh do image optimization for user

# minification

# compress

# compress files

# consistance hashing

# HMR- hot module replacement


/**
 * Header
 *  -logo
 *  -nav items
 * Body
 *  - search bar
 *  - restaurant container
 *     - restaurant card
 * Footer
 *  - copy rights
 *  - links
 *  - address
 *  -priver policy
 *
 *
 *
 *
 *
 *
 *
 */



 import RestCard from "./RestCard";
// import { resList } from "../utils/data";
import { useEffect, useState } from "react";
import ShimmerCard from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://api.jsonbin.io/v3/b/68948068f7e7a370d1f633a5",
      {
        headers: {
          "X-Master-Key":
            "$2a$10$7A0IkBdDJ79nUbg4hz5bn.xh58BZBBydKPbcu.5bxIvW4H7/IypfG", // Replace with your actual key
          "X-Access-Key":
            "$2a$10$AUEcJB4w55G/ABcPOEp85uxcI0d7YefxDGls8BO0YolTk/HWWHdtu", // Optional but recommended
        },
      }
    );

    const json = await data.json();
    setRestaurantList(json?.record?.resList);
  };

  return restaurantList.length == 0 ? (
    <ShimmerCard />
  ) : (
    <div className="body">
      <div className="filter-btn-wrapper">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredCard = restaurantList.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setRestaurantList(filteredCard);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setRestaurantList(restaurantList.filter((res) => res.rating > 4.7));
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


"https://api.jsonbin.io/v3/b/68948068f7e7a370d1f633a5",
      {
        headers: {
          "X-Master-Key":
            "$2a$10$7A0IkBdDJ79nUbg4hz5bn.xh58BZBBydKPbcu.5bxIvW4H7/IypfG", // Replace with your actual key
          "X-Access-Key":
            "$2a$10$AUEcJB4w55G/ABcPOEp85uxcI0d7YefxDGls8BO0YolTk/HWWHdtu", // Optional but recommended
        },