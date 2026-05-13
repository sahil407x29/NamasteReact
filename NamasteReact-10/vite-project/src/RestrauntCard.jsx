const RestrauntCard = ({cloudinaryImageId,name,cuisines,avgRating}) => {

  
  return (
    <div id="card" class='w-46git  overflow-hidden rounded-md bg-gray-200'>
      <img class=''src={"https://media-assets.swiggy.com/swiggy/image/upload/"+cloudinaryImageId} alt="" />
      <div className="text-content overflow-auto">
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRating} stars</h4>
      </div>
    </div>
  );
}

export default RestrauntCard;