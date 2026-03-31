import UserClass from "./UserClass.jsx";
import { Component } from "react";
// Life Cycle of a react component 
// the Component will strat mounting by the first calling its Constructor then render
// and then its Childs constructor and render and then call its own componentDidMount

class AboutClass extends Component {
  constructor(props) {
    super(props)
    
    console.log("parent constructor")
  }

  componentDidMount() {
    console.log("parent component did mount")
  }
  render() {
    console.log("parent render")
    return (
      <>
      <UserClass name="first" />
      <UserClass name="second" />
      </>
     )

  }
}

export default AboutClass;

/*
parent constructor
 parent render
first constructor
 first render

 second constructor
 second render

 first component did mount
 second component did mount

 parent component did mount
 * */
  