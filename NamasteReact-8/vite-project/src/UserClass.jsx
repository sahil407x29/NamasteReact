import React from "react";
class UserClass extends React.Component {
  // whenever a class instance is created the first thing when the class loads the Constructor is called 
  // then render is called
  constructor(props) {
    super(props);
    const {name} = this.props
    this.state = {
      count: 1,
      countA: 2,
      countB:3,
      countC:4,
      countD:5

    };
    console.log(name + " constructor")
  }
   componentDidMount() {
    const {name} = this.props
    console.log(name +  " component did mount")
   }
   
  render() {
    const {name} = this.props
    console.log(name + " render")
    const { count, countA } = this.state;

    // const { name } = this.props;

    return (
      <>
      
        <h1>{count}</h1>
        <h1>{countA}</h1>
        <button
          onClick={() =>
            // this.setState((prev) => {
            //   return { count: prev.count + 1 }; //these curly braces are used here so JS knows that this is an object literal
            //   // { count: ... } is treated as an object because it's returned
            //   // without 'return', {} would be treated as a block, not an object
            // })
            this.setState(
              {count : this.state.count+1}
            )
          }
        >
          Increase{" "}
        </button>
        <h1>This is User {name}</h1>
        <h2>Location : orrisa</h2>
        <h3>Contact : sahil407x29</h3>
      </>
    );
  }
}
export default UserClass;
