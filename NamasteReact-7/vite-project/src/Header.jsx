import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
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
    <div className="title">
      <img
        className="logo"
        src="https://tse2.mm.bing.net/th/id/OIP.5CSpVjV_VyICmJC1qptK2gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
        alt="Logo"
      />
      <h1>{title}</h1>
      {/* {isLoggedIn ? (
        <button onClick={() => setLog(false)}>Logout</button>
      
      ) : (
          <button onClick={() => setLog(true)}>Login</button>
      )} */}
      {/* <button onClick={()=>setTitle("hello")}> Title Changer</button> */}
    </div>
  );
};

// Defualt Export
export default Header;
