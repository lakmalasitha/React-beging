import RestCard from "./RestCard";
// import { resList } from "../utils/data";
import { useEffect, useState } from "react";
import ShimmerCard from "./Shimmer";
import { Link } from "react-router-dom";
import { API_CONFIG } from "../utils/constants";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterWithSearch, SetFilterWithSearch] = useState([]);
  const [filteredItem, setFilteredItem] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_CONFIG.url, { headers: API_CONFIG.headers });
    const json = await data.json();
    setListOfRestaurant(json?.record?.resList);
    setFilteredItem(json?.record?.resList);
  };
  return listOfRestaurant.length == 0 ? (
    <ShimmerCard />
  ) : (
    <div className="body">
      <div className="filter-main-wrapper">
        <div className="filter-search">
          <input
            name="search"
            id="search-box"
            type="text"
            value={filterWithSearch}
            onChange={(e) => SetFilterWithSearch(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredSearch = listOfRestaurant.filter((res) =>
                res.name.toLowerCase().includes(filterWithSearch.toLowerCase())
              );
              setFilteredItem(filteredSearch);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const ratingFilter = listOfRestaurant.filter(
              (res) => res.rating > 4.7
            );

            setFilteredItem(ratingFilter);
          }}
        >
          Filter with Rating
        </button>
      </div>
      <div className="res-card-container">
        {filteredItem.map((res) => (
          <Link key={res.id} to={`/restaurant/${res.id}`}>
            <RestCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
