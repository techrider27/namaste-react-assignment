import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent component did mount");
  }

  render() {
    // console.log("Parent Render");

    return (
      <div className="flex items-start justify-evenly mt-5 flex-col">
        <h1 className="text-2xl">About Class Component</h1>
        <div>
          Logged in User
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2 className="text-3xl">This is namaste react web series</h2>
        {/* <User name={"Functional Component"} /> */}
        <UserClass name={"Child Class 1"} location={"1"} />
        {/* <UserClass name={"Child Class 2"} location={"2"} /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is namaste react web series</h2>
//       {/* <User name={"Functional Component"} /> */}
//       <UserClass name={"Child Class 1"} location={"1"} />
//       <UserClass name={"Child Class 2"} location={"2"} />
//     </div>
//   );
// };

export default About;
