import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restrauntList, setRestrauntList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // fetch is a browser function to call api, not a javascript function
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4757964&lng=78.3619756&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // optional chaining
    setRestrauntList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (!useOnlineStatus())
    return <h1>Please check your internet connection!</h1>;

  return restrauntList.length === 0 ? (
    <div>
      <Shimmer />
    </div>
  ) : (
    <div className="body">
      <div className="flex">
        <div className="p-4 m-4">
          <input
            type="text"
            className="border-2 border-gray-300 rounded-md px-4 py-1 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 w-72 shadow-sm"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-6 py-1 m-2 rounded-lg  bg-red-300 hover:bg-red-100"
            onClick={() => {
              const filteredArray = restrauntList.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredResList(filteredArray);
            }}
          >
            search
          </button>
        </div>
        <div className="py-4 my-4">
          <button
            className="px-6 py-1 my-2 rounded-lg  bg-red-300 hover:bg-red-100"
            onClick={() => {
              setFilteredResList(
                restrauntList.filter((restrauntInfo) => {
                  return restrauntInfo.info.avgRating > 4.1;
                })
              );
            }}
          >
            Top Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredResList.map((restrauntInfo) => {
          return (
            <Link to={`resturant/${restrauntInfo.info.id}`}>
              <ResCard
                key={restrauntInfo.info.id}
                restrauntDetails={restrauntInfo}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
