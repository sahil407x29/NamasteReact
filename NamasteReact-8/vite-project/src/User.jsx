import { useState, useEffect } from "react";

const User = (props) => {
  const { name } = props;
  // const [input,SetInput] = useState([])
  const [user, setUser] = useState({
    input: "",
    name: "Sahil",
    age: 19,
    Location: "Orrisa",
  });
  useEffect(() => {
    loadPfp();

    return ()=> {console.log("unmount")}
    // this is a cleanUp function which is analgous ComponentWillUnmount in class based components 
    
  }, []);

  async function loadPfp() {
    const response = await fetch(`https://api.github.com/users/${user.input}`);
    const data = await response.json();
    setUser((prev) => {
      return {
        ...prev,
        ...data,
      };
    });
  }


return (
  <>
    <input type="text"
    onChange={(e)=> (
        setUser((prev)=> (
            {
                ...prev,
                input:e.target.value
            }
        ))
    )}
    value={user.input}
     placeholder="enter github username" />
    <button onClick={()=> loadPfp()}>Search</button>
    <img src={user.avatar_url} alt="" />
    <h1>This is User {name}</h1>
    <h2>Location : orrisa</h2>
    <h3>Contact : sahil407x29</h3>
  </>
);
}
export default User;
