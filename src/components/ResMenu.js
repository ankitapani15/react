import useResMenu from "../utils/useResMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import ResCategory from "./ResCategory";
import { useState } from "react";

const ResMenu = () => {
  const { resId } = useParams();

  const resDetails = useResMenu(resId);
  const [showIndex, setShowIndex] = useState(null); // lifting the state up

  if (resDetails === null) return <Shimmer />;
  const categories =
    resDetails?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) => {
        return (
          category.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      },
    );
  const resName = resDetails?.cards[0]?.card?.card?.text;

  return (
    <div>
      <div className="text-center ">
        <div className="my-6 text-2xl font-bold text-gray-600">{resName}</div>
        {categories.map((category, index) => (
          <ResCategory //controlled component
            key={category.card.card.categoryId}
            categoryInfo={category.card.card}
            showItems={index === showIndex && true}
            setShowItems={() =>
              setShowIndex((prev) => (prev === index ? -1 : index))
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ResMenu;
