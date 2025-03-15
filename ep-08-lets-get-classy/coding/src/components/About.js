import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent component did mount");
  }

  render() {
    console.log("Parent Render")
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is namaste react web series</h2>
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
