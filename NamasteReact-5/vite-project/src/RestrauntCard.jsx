const RestrauntCard = ({cloudinaryImageId,name,cuisines,avgRating}) => {

  
  return (
    <div id="card">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+cloudinaryImageId} alt="" />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
}

export default RestrauntCard;