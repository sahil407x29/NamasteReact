import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { useEffect, useState } from "react";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Header, {Title} from "./Header.jsx";
import Body from './Body.jsx'
import Footer from './Footer.jsx'
import About from './About.jsx'
import Contact from "./Contact.jsx";


console.log("react is working");
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

export const AppRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>
  },
  {
    path:"/about",
    element:<About/>
  },
   {
    path:"/contact",
    element:<Contact/>
  }
])
createRoot(document.getElementById("root")).render(
  <StrictMode>{/* <div>Hello from StrictMode root!</div> */}</StrictMode>,
);

export default AppLayout;
// hello git