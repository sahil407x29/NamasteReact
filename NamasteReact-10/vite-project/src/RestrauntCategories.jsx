import ItemList from './ItemList.jsx'

const RestrauntCategories = ({data}) => {
  return (
    <div className=" w-[50%] mx-auto my-4 bg-gray-50 shadow-xl p-4">
    <div className="  flex justify-between">
 
     <span>{data?. title}{`(${data?.itemCards.length})`}</span>
     <span>⬇️</span>
     
    </div>
    <ItemList  data={data?.itemCards}/>
   </div>
  );
};

export default RestrauntCategories;
