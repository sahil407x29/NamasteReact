import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import Header, { Title } from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import About from "./About.jsx";

import Contact from "./Contact.jsx";
import Error from "./ErrorPage.jsx";
import RestrauntMenu from "./RestrauntMenu.jsx";

console.log("react is working");
const AppLayout = () => {
  return (
    <>
      <>
        <Header />
        <Outlet/>
        {/* Outlet means
          if(path = "/")
          then Outlet = <Body/>
        */}
        <Footer />
      </>
    </>
  );
};

export const AppRouter = createBrowserRouter([
  // cBR is used to create and define routes
  // RouterProvider is used to activate routing
  {
    path : "/",
    element : <AppLayout/>,
    children : [ 
      {
        path:'/',
        element:<Body/>
      },
      {
        path :'/about',
        element:<About/>,
       
      },
      {
        path :'/contact',
        element :<Contact/>
      },
      {
        path :'/restraunts/:resID',
        element : <RestrauntMenu/>
      }

    ],
    errorElement:<Error/>
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>{/* <div>Hello from StrictMode root!</div> */}</StrictMode>,
);

export default AppLayout;
