import { IMG_CDN_URL } from "./Constants.jsx";
const ItemList = ({ data }) => {
  
  const defaultImage =
    "https://tse4.mm.bing.net/th/id/OIP.DMXSq6hhQ7YPeznzuGdeUgHaEe?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3";
  return (
    <div>
      {data.map((data) => {
        return (
          <div
            className="m-2  border-b-2 border-gray-200 pb-6 text-left flex justify-between "
            key={data?.card?.info?.id}
          >
            <div className="w-7/12">
              <span>{data?.card?.info?.name} </span> -
              <span> Rs {data?.card?.info?.price / 100} </span>
              <p className="text-xs "> {data?.card?.info?.description} </p>
            </div>
            <div className="w-3/12 flex flex-col items-center">
              <img
                className="w-[100px] h-[100px] object-fill rounded-lg"
                src={
                  data?.card?.info?.imageId
                    ? IMG_CDN_URL + data?.card?.info?.imageId
                    : defaultImage
                }
                alt=""
              />

              {data?.card?.info?.imageId && (
                <button
                  className="
      mt-[-15px]
      bg-white
      border
      rounded-lg
      px-4
      py-2
      text-green-800
      shadow-md
      z-10
      "
                >
                  ADD +
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  ); /*  */
};

export default ItemList;
