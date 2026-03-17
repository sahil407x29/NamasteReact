import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { useEffect, useState } from "react";

import Header, {Title} from "./Header.jsx";
import Body from './Body.jsx'
import Footer from './Footer.jsx'




console.log("react is working");


// Config Driven UI
const Burgerking = {
  name: "Burger King",
  image:
    "https://img.freepik.com/premium-psd/food-ads-banner-design_220346-11995.jpg",
  cusines: ["Burgers", "Amercians"],
  rating: "4.2",
};


const AppLayout = () => {
  return (
    // <React.Fragment> // or
    <>
      <>
        <Header />
        <Body />
        <Footer />
      </>
    </>
    // </React.Fragment>
  );
};


createRoot(document.getElementById("root")).render(
  <StrictMode>{/* <div>Hello from StrictMode root!</div> */}</StrictMode>,
);

export default AppLayout;
// hello git