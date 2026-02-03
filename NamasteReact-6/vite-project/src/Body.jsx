import { restrauntList } from './Constants.jsx'
import RestrauntCard from './RestrauntCard.jsx'
import { useState,useEffect } from 'react'

function filterData(searchText,restraunt) {
   return restraunt.filter((res)=> res.info?.name.toLowerCase().includes(searchText))
}

const Body = () => {
    const  [searchText,setSearch] = useState("")
    const [restraunt,setRestraunt] = useState(restrauntList)

    return (
        <>
        <input type="text"
        placeholder=''
        value={searchText}
        onChange={(e)=> {
            setSearch(e.target.value)
        }} />

        <button onClick={()=> {const data =filterData(searchText,restrauntList)
            setRestraunt(data)
        }}>Search</button>




        <div className='restraunt-List'>
            {restraunt.map((res)=> {
                return (
                <RestrauntCard {...res.info}
                key = {res.info.id}
                />
                )
            })}

        </div>
        </>
    )

}

export default Body