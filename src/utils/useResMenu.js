import { useState, useEffect } from "react";

const useResMenu = (resId) => {
  const [resDetails, setResDetails] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4757964&lng=78.3619756&restaurantId=${resId}`
    );
    const json = await data.json();
    setResDetails(json.data);
  };

  return resDetails;
};

export default useResMenu;
