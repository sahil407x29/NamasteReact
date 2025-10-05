// Hot Module Reloading
// file Watcher algorithm
// Minifying
// Bundling
// Cleaning Our Code
// Dev Production Build
// Super Fast build Algorithm
// Image Optimization
// Caching while development
// Compression
// Compatible with older version of browsers
// HTTPS on dev 
// Port Number
// Everything is happening on Parcel Cache
// 

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import App from './App.jsx/'
import React from "react";
import ReactDOM from "react-dom/client";

console.log("react is working")
  

// window.React = React;
// window.ReactDOM = ReactDOM;

 const heading1 = React.createElement('h1',{
  id:'title'
 },"Heading 1");
 const heading2 = React.createElement('h2',{
  id : 'title'
 }, 'Heading 2'
)
const container = React.createElement('div',{
  id : 'container'
},[heading1,heading2])
//  console.log(heading);
 const root2 = createRoot(document.getElementById('root2'))
 root2.render(container);
 
 console.log(root)
//  root.innerText = 'hello World'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <div>Hello from StrictMode root!</div>
  </StrictMode>,
)