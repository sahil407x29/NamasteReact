import { StrictMode, lazy, Suspense,useState,useEffect } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header, { Title } from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import About from "./About.jsx";
// import Grocery from "./Grocery.jsx"
import Contact from "./Contact.jsx";
import Error from "./ErrorPage.jsx";
import RestrauntMenu from "./RestrauntMenu.jsx";
import Shimmer from "./Shimmer.jsx";
import UserContext from "../utils/UserContext"
import Cart from './Cart.jsx'
const Grocery = lazy(() => import("./Grocery.jsx"));
import {Provider} from 'react-redux';
import appStore from '../utils/appStore.jsx'
// import appStore from '../utils/appStore.jsx'
// lazy is used to not load a component beforehand or chunk them separtely
// use Suspense with Lazy to use a placeholder or fallback

console.log("react is working");
const AppLayout = () => {
 const [userName,setUserName] = useState()
  useEffect(()=> {
    const data = {
      name : 'Sahil'
    }
    setUserName(data.name)
  },[])
  return (
    <>
      <>
      <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        {/* Context.Provider is used to update the value of the context 
        can be used to update the value for specific components only by specifying */}
        <Header />
         <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
        <Outlet />
         </UserContext.Provider>
        {/* Outlet means
          if(path = "/")
          then Outlet = <Body/>
        */}
        <Footer />
        </UserContext.Provider>
        </Provider>
      </>
    </>
  );
};

export const AppRouter = createBrowserRouter([
  // cBR is used to create and define routes
  // RouterProvider is used to activate routing
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      ,
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: 
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restraunts/:resID",
        element: <RestrauntMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
createRoot(document.getElementById("root")).render(
 
);

export default AppLayout;
