import { useEffect, useState } from "react";

const ResMenu = () => {
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4757964&lng=78.3619756&restaurantId=491518"
    );
    const json = await data.json();
    console.log(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.categories[0]?.title
    );
  };
  useEffect(() => {
    fetchMenu();
  }, []);

  return <div>ResMenu</div>;
};

export default ResMenu;
