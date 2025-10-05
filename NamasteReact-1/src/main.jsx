import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx/'
import React from "react";
import ReactDOM from "react-dom/client";
  

window.React = React;
window.ReactDOM = ReactDOM;

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
 const root = createRoot(document.getElementById('root2'))
 root.render(container);
 
 console.log(root)
//  root.innerText = 'hello World'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
  </StrictMode>,
)
