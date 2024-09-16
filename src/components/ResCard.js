import { RES_CARD_IMG } from "../utils/constants";

const ResCard = (props) => {
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating } =
    props.restrauntDetails.info;
  return (
    <div className="card">
      <img className="card-image" src={RES_CARD_IMG + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default ResCard;
