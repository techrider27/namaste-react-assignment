import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy name",
        location: "default",
        avatar_url: "dummy pic",
      },
    };
    // this.state = {
    //   count: 0,
    // };

    console.log("Child Constructor");
  }

  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Namaste React");
    }, 1000);

    console.log("child component did mount");

    const data = await fetch("https://api.github.com/users/techrider27");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
    }
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component Will Mount");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log("Child Render");
    return (
      <div className="user-card">
        <img className="avatar" src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact:No</h4>
      </div>
    );
  }
}

export default UserClass;
