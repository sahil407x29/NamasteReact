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
            <div className="w-3/12 relative ">
              <img
                className="w-[100px] h-[100px] m-0 p-0 "
                src={
                  data?.card?.info?.imageId
                    ? IMG_CDN_URL + data?.card?.info?.imageId
                    : defaultImage
                }
                alt=""
              />

              {data?.card?.info?.imageId ? (
                <button
                  className="text-green-800 px-4 z-10 py-2
               border-1 rounded-lg absolute top-[75px] left-[11px] bg-white "
                >
                  ADD +
                </button>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
