import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import App from './App.jsx/'
import React from "react";
import ReactDom from "react-dom";

console.log("react is working");
const Title = () => {
  return (
    <img
      className="logo"
      src="https://th.bing.com/th/id/OIP.il940qLO_DU03I-kD-veNwHaHa?w=158&h=180&c=7&r=0&o=7&cb=12&dpr=1.6&pid=1.7&rm=3"
      alt="Logo"
    />
  );
};
const Burgerking = {
  name : "Burger King",
  image : "https://img.freepik.com/premium-psd/food-ads-banner-design_220346-11995.jpg",
  cusines : ['Burgers','Amercians'],
  rating : "4.2" 

}
const RestrauntCard = () => {
  return (
    <div id="card">
      <img src={Burgerking.image} alt="" />
      <h2>{Burgerking.name}</h2>
      <h3>{Burgerking.cusines.join(',')}</h3>
      <h4>{Burgerking.rating} stars</h4>
 
    </div>
  );
};
const Body = () => {
  return (
  <div className="restraunt-List">
 
  <RestrauntCard />
  <RestrauntCard />
  <RestrauntCard />
  <RestrauntCard />
  <RestrauntCard />
  <RestrauntCard />
  <RestrauntCard />

  
  
  </div>
  )
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};
const Footer = () => {
  return <h4>Footer</h4>;
};
// JSX can have only one parent
// React.Fragment
const AppLayout = () => {
  return (
    // <React.Fragment> // or
    <>
      <Header />
      <Footer />
      <Body />
    </>
    // </React.Fragment>
  );
};
const Jsx = () => {
  return (
    <div
      style={{
        backgroundColor: "red",
      }}
    >
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

const root2 = createRoot(document.getElementById("root2"));
// root2.render(heading);
// root2.render(<Title/>)
root2.render(<AppLayout />);
// root2.render(FullComp());
// to pass a functional component you'll have to pass it as a self closing tag => (<HeaderComponent />
window.Header = Header;

// console.log(root);
//  root.innerText = 'hello World'

createRoot(document.getElementById("root")).render(
  <StrictMode>{/* <div>Hello from StrictMode root!</div> */}</StrictMode>
);
