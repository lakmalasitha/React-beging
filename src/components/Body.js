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
      <div className="mx-5 sm:mx-10 md:mx-20 lg:mx-60 ">
        <div className="filter-main-wrapper flex justify-between items-center">
          <div className="filter-search my-4">
            <input
              className="border border-solid border-black"
              name="search"
              id="search-box"
              type="text"
              value={filterWithSearch}
              onChange={(e) => SetFilterWithSearch(e.target.value)}
            />
            <button
              className="px-4 py-1  bg-green-200 m-4 font-bold"
              onClick={() => {
                const filteredSearch = listOfRestaurant.filter((res) =>
                  res.name
                    .toLowerCase()
                    .includes(filterWithSearch.toLowerCase())
                );
                setFilteredItem(filteredSearch);
              }}
            >
              search
            </button>
          </div>
          <div>
            <button
              className="flex bg-green-200 justify-center items-center px-4 py-2  rounded-lg font-bold"
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
        </div>
        <div className="res-card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 ">
          {filteredItem.map((res) => (
            <Link key={res.id} to={`/restaurant/${res.id}`}>
              <RestCard resData={res} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
