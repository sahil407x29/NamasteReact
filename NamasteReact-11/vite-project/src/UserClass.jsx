import React from "react";
import UserContext from "../utils/UserContext"
class UserClass extends React.Component {
  // whenever a class instance is created the first thing when the class loads the Constructor is called
  // then render is called
  constructor(props) {
    super(props)
    // super here is used to initialise the parent so the parent creates and setup the constructor for the component
    const { name } = this.props;
    this.state = {
      userInfo: {
        name: "Sahil",
        Location: "Odisha",
      },
    };
    this.timer = ()=> this.intervalId = setInterval(() => {
      console.log("MountedTesting")
    }, 1000)
    console.log(name + " constructor");
  }
  // async componentDidMount() {
  //   const data = await fetch("https://api.github.com/users/akshaymarch7");
  //   const json = await data.json();
  //   const defaultAvatar =
  //     "https://avatars.githubusercontent.com/u/195129683?v=4";
  //   this.setState({
  //     userInfo: {
  //       ...json,
  //       avatar_url:
  //         json.avatar_url === defaultAvatar
  //           ? "https://tse4.mm.bing.net/th/id/OIP.SAcV4rjQCseubnk32USHigHaHx?rs=1&pid=ImgDetMain&o=7&rm=3"
  //           : json.avatar_url,
  //     },
  //   });
  //  this.timer()

    

  //   /*     this will do 
  //   {
  //     userInfo : {
  //       // all the data from json 
  //       // eg .. 
  //        {name :sahil} , {age:19}
  //     }
  //   } */

  //   const { name } = this.props;
  //   console.log(name + " component did mount");
  // }
  componentDidUpdate() {
    console.log(name + "component did update");
    clearInterval(this.intervalId)
  }
  componentWillUnmount() {
    console.log(name + "component did unmount");
    // this will be called when the component is unmounted i.e shifting to another component
  }

  render() {
    // const { name } = this.props;
    // console.log(name + "render");
    // // const { count, countA } = this.state;
    // const { avatar_url } = this.state.userInfo;

    // const finalAvatar =
    //   avatar_url === "https://avatars.githubusercontent.com/u/195129683?v=4"
    //     ? "https://tse4.mm.bing.net/th/id/OIP.SAcV4rjQCseubnk32USHigHaHx?rs=1&pid=ImgDetMain&o=7&rm=3"
    //     : avatar_url;

    // return <img src={finalAvatar} alt="" />;
    // return (
    //   <>
    //     <h1>{count}</h1>
    //     <h1>{countA}</h1>
    //     <button
    //       onClick={() =>
    //         // this.setState((prev) => {
    //         //   return { count: prev.count + 1 }; //these curly braces are used here so JS knows that this is an object literal
    //         //   // { count: ... } is treated as an object because it's returned
    //         //   // without 'return', {} would be treated as a block, not an object
    //         // })
    //         this.setState({ count: this.state.count + 1 })
    //       }
    //     >
    //       Increase{" "}
    //     </button>
    //   </>
    // )
    return (
    <UserContext.Consumer>
      {/* this is used to use a context in class based components  */}
      {({loggedInUser})=><h1>{loggedInUser}</h1>}
      </UserContext.Consumer>
    )
  }
}
export default UserClass;

/* 

-- MOUNTING 
*Constructor(dummy)
*Render(dummy)
*<HTML Dummy>
*ComponentDidMount
*<API call>
*this.setState -> state Variable is updated
* -- UPDATE (setState)
*render(API DATA)
*<HTML(new api data)>
*componentDidUpdate
*
*
*/
