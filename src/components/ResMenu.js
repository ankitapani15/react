import useResMenu from "../utils/useResMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const ResMenu = () => {
  const { resId } = useParams();

  const resDetails = useResMenu(resId);
  if (resDetails === null) return <Shimmer />;

  const menuItems =
    resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7]?.card
      ?.card?.itemCards;

  return (
    <div>
      <div>Restraunt Menu</div>
      {resDetails?.cards?.length && (
        <div>
          <div>{resDetails?.cards[0]?.card?.card?.text}</div>
          {menuItems.map((item) => {
            return <li>{item.card.info.name}</li>;
          })}
        </div>
      )}
    </div>
  );
};

export default ResMenu;
