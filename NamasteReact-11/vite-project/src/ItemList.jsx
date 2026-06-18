import { IMG_CDN_URL } from "./Constants.jsx";
import { useDispatch } from "react-redux";
import {addItem} from '../utils/cartSlice.jsx'
const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleClick= (name) => {
    dispatch(addItem(name));
    
  };
  
  const defaultImage  =
    "https://tse4.mm.bing.net/th/id/OIP.DMXSq6hhQ7YPeznzuGdeUgHaEe?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3";
  return (
    <div>
      {items.map((items) => {
        return (
          <div
            className="m-2  border-b-2 border-gray-200 pb-6 text-left flex justify-between "
            key={items?.card?.info?.id}
          >
            <div className="w-7/12">
              <span>{items?.card?.info?.name} </span> -
              <span> Rs {items?.card?.info?.price / 100} </span>
              <p className="text-xs "> {items?.card?.info?.description} </p>
            </div>
            <div className="w-3/12 flex flex-col items-center">
              <img
                className="w-[100px] h-[100px] object-fill rounded-lg"
                src={
                  items?.card?.info?.imageId
                    ? IMG_CDN_URL + items?.card?.info?.imageId
                    : defaultImage
                }
                alt=""
              />

              {items?.card?.info?.imageId && (
                <button
                  onClick={()=>handleClick(items)}
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
