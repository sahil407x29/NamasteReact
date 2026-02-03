import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
// Default Import
// import Header from './Header.jsx'
// Named Import
// import {Title} from './Header.jsx'
// or
// import * as Obj from './Header.jsx'
//and write <Obj.Title/> while calling component 
// or
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
// props - properties
// const RestrauntCard = (props) => {
//   return (
//     <div id="card">
//       <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ props.restraunt.info?.cloudinaryImageId} alt="" />
//       <h2>{props.restraunt.info?.name}</h2>
//       <h3>{props.restraunt.info?.cuisines.join(",")}</h3>
//       <h4>{props.restraunt.info?.avgRating} stars</h4>
//     </div>
//   );
// };
// or

// const RestrauntCard = ({restraunt}) => {
//   return (
//     <div id="card">
//       <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restraunt.info?.cloudinaryImageId} alt="" />
//       <h2>{restraunt.info?.name}</h2>
//       <h3>{restraunt.info?.cuisines.join(",")}</h3>
//       <h4>{restraunt.info?.avgRating} stars</h4>
//     </div>
//   );
// };
// or

// const RestrauntCard = ({restraunt}) => {

//   const {name, cloudinaryImageId , cuisines , avgRating} = restraunt.info;
//   return (
//     <div id="card">
//       <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+cloudinaryImageId} alt="" />
//       <h2>{name}</h2>
//       <h3>{cuisines.join(",")}</h3>
//       <h4>{avgRating} stars</h4>
//     </div>
//   );
// };
//  or 
// const Body = () => {
//   return (
//     <div className="restraunt-List">
//       <RestrauntCard restraunt={restrauntList[0]} />
// {} --> JSX EMbedding any piece of code written in this will be executed as JS
//       <RestrauntCard restraunt={restrauntList[1]}/>
//       <RestrauntCard restraunt={restrauntList[2]}/>
//       <RestrauntCard restraunt={restrauntList[3]}/>
//       <RestrauntCard restraunt={restrauntList[4]}/>
//       <RestrauntCard restraunt={restrauntList[5]}/>
//       <RestrauntCard restraunt={restrauntList[6]}/>
//     </div>
//   );
// };

// or

// const Body = () => {
//   return (
//     <div className="restraunt-List">
//       <RestrauntCard {...restrauntList[0].info} />
//       <RestrauntCard {...restrauntList[1].info}/>
//       <RestrauntCard {...restrauntList[2].info}/>
//       <RestrauntCard {...restrauntList[3].info}/>
//       <RestrauntCard {...restrauntList[4].info}/>
//       <RestrauntCard {...restrauntList[5].info}/>
//       <RestrauntCard {...restrauntList[6].info}/>
//     </div>
//   );
// };


// 




// JSX can have only one parent
// React.Fragment
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
const styleObj = { backgroundColor: "red" };
const Jsx = () => {
  return (
    <div style={styleObj}>
      <h1>HELLO</h1>
    </div>
  );
};
// window.React = React;
// window.ReactDOM = ReactDOM;

//  const heading1 = React.createElement('h1',{
//   id:'title',
//   key: 'h1'

//  },"Heading 1");
//  const heading2 = React.createElement('h2',{
//   id : 'title',
//   key: 'h2'
//  }, 'Heading 2'
// )
// const container = React.createElement('div',{
//   id : 'container'
// },[heading1,heading2])
//  console.log(heading);

// JSX =>React.createElement =>  Object => HTML(DOM)
// const heading = <h1>Hello I am Heading</h1>;
// This is a JSX expression

// React Component
// functional -NEW
// Class Based Component - old
// const HeaderComponent = () => {
//   return (
//     <div>
//       {" "}
//       {heading}
//       <h1>Namaste header Component </h1>{" "}
//       <h2>H2 tag</h2>
//     </div>
//   );
// };

// const FullComp = ()=> {
//   return (
//      <HeaderComponent/>
//     //  Component composition = using components inside other components to build bigger UIs.
//   )
// }

// const root2 = createRoot(document.getElementById("root2"));
// // root2.render(heading);
// // root2.render(<Title/>)
// root2.render(
//   <>
//     <AppLayout />
//     <Jsx />
//   </>,
// );

// root2.render(FullComp());
// to pass a functional component you'll have to pass it as a self closing tag => (<HeaderComponent />
window.Header = Header;

// console.log(root);
//  root.innerText = 'hello World'

createRoot(document.getElementById("root")).render(
  <StrictMode>{/* <div>Hello from StrictMode root!</div> */}</StrictMode>,
);

export default AppLayout;
// hello git