import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import UserContext from "../utils/UserContext"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {
  const status = useOnlineStatus()
  const {loggedInUser} = useContext(UserContext)


  return (
    <div className="header flex items-center justify-between  bg-[#BBD58E] shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
      <Title />
      <div className="nav-items  ">
        <ul className='flex gap-3 mr-4'>
          <li>
            Online Status : {status? "✅" :"🔴"}
          </li>
          <li>
           <Link to="/grocery">
            Grocery
           </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }}>Home</Link>
            {/* used Link tag instead of anchor tag becuase it doesnt refresh the page upon clicking */}
            {/* Link Itself is a Wrapper over anchor tag */}
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/about"
             >
              About Us
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/contact"
            >
              {" "}
              Contact
            </Link>
          </li>
          <li className='px-2 font-bold'>User: {loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

// Named Export
export const Title = () => {
  console.log("title rendered");
  const [title, setTitle] = useState("FoodVilla");

  // console.log("render()")
  return (
    <Link to={"./"} style={{ all: "unset" }}>
      <div className="title flex gap-4 h-25 items-center">
        <img
          className="logo h-20 ml-5 my-auto"
          src="https://tse2.mm.bing.net/th/id/OIP.5CSpVjV_VyICmJC1qptK2gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Logo"
        />

        <h1>{title}</h1>
      </div>
    </Link>
  );
};

// Defualt Export
export default Header;
