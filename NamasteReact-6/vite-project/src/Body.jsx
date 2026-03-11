import { restrauntList } from './Constants.jsx'
import RestrauntCard from './RestrauntCard.jsx'
import { useState,useEffect } from 'react'
import Shimmer from './Shimmer.jsx'

function filterData(searchText,allRestraunt) {
   return allRestraunt.filter((res)=> res.info?.name.toLowerCase().includes(searchText.toLowerCase()))
}

const Body = () => {
    const  [searchText,setSearch] = useState("")
    const [filteredRestraunt,setFilteredRestraunt] = useState([])
    const [allRestraunt,setAllRestraunt] = useState([])
    // empty dependecny array => called once after render
    // useEffect(()=> {
    //     console.log("use Effect")
    // },[]) //dependency Array
    // console.log("render()")

    // dependency array = searchText = once after initial render + every time after re-render searchText is changed 
    // useEffect(()=> {
    //     console.log("use Effect")
    // },[searchText])
    // console.log("render")

    useEffect(()=> {
        getRestraunts()
         
    },[])

    async function getRestraunts() {
        const response =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&page_type=DESKTOP_WEB_LISTING")
        const data = await response.json()
        // return  data
           setAllRestraunt(data?.data?.cards[1]
  ?.card
  ?.card
  ?.gridElements
  ?.infoWithStyle
  ?.restaurants
)
        setFilteredRestraunt(data?.data?.cards[1]
  ?.card
  ?.card
  ?.gridElements
  ?.infoWithStyle
  ?.restaurants
)
    }

    if(!allRestraunt) return null
     //Early Return 

   

    return allRestraunt.length == 0 ? (<Shimmer/>) :
    // GPT differernce between this and allRestraunt.length
       ( <> 
        <input type="text"
        placeholder='Enter Restraunt'
        value={searchText}
        onChange={(e)=> {
            setSearch(e.target.value)
        }} />

        <button onClick={()=> {const data =filterData(searchText,allRestraunt)
            setFilteredRestraunt(data)
        }}>Search</button>




        <div className='restraunt-List'>
            
            { filteredRestraunt.map((res)=> {
                return (
                <RestrauntCard {...res.info}
                key = {res.info.id}
                />
                )
            })}

        </div>
        </>)
    

}

export default Body;