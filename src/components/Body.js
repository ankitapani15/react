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
      <div className="body-header">
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
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
        <button
          className="top-res-btn"
          onClick={() => {
            setFilteredResList(
              restrauntList.filter((restrauntInfo) => {
                return restrauntInfo.info.avgRating >= 4;
              })
            );
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="res-container">
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
