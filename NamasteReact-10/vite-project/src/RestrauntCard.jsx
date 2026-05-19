const RestrauntCard = ({cloudinaryImageId,name,cuisines,avgRating}) => {

  
  return (
    <div id="card" className='w-43  overflow-hidden rounded-md bg-gray-200 hover:scale-104 transition delay-150'>
      <img className='h-40 w-full object-cover'src={"https://media-assets.swiggy.com/swiggy/image/upload/"+cloudinaryImageId} alt="" />
      <div className="text-content overflow-auto flex flex-col gap-4">
      <h2>{name}</h2>
      <h3 className="break-words line-clamp-1">{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
      </div>
    </div>
  );
}


// a HOC takes a component modifies it and returns it with the modification
export const withDiscountLabel = (WrappedComponent)=> {
  return(props)=> 
    <div className='relative'>
    <p className='absolute top-[136px] bg-white font-bold '>AT ₹99</p>
    <WrappedComponent  {...props}/>
    
    </div>
  
}
export default RestrauntCard;