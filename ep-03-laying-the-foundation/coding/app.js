import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./img/logo.png";
import "./app.css";

// Create a Nested Header Element using React.createElement(h1, h2, h3 inside a div with class "title")
const nestedHeader = React.createElement(
  "div",
  { className: "title" },
  React.createElement("h1", {}, "Nested Header h1"),
  React.createElement("h2", {}, "Nested Header h2"),
  React.createElement("h3", {}, "Nested Header h3")
);

//Create the same element using JSX + pass attributes into the JSX
const header = (
  <div className="title">
    <h1 style={{ textAlign: "center" }}>
      Create the same element using JSX + pass attributes into the JSX ⬇
    </h1>
    <h1 style={{ textAlign: "center" }}>H1 using jsx</h1>
    <h2 style={{ textAlign: "center" }}>H2 using jsx</h2>
    <h3 style={{ textAlign: "center" }}>H3 using jsx</h3>
  </div>
);

// Create a functional component of the same with JSX

const AnotherComponent = () => {
  return (
    <>
      <h4 style={{ textAlign: "center" }}>Component composition</h4>
      <p style={{ textAlign: "center" }}>paragraph component composition</p>
    </>
  );
};

const timepass = (
  <div>
    <h3 style={{ textAlign: "center" }}>timepass jsx element</h3>
  </div>
);

const Time = () => (
  <h4 style={{ textAlign: "center" }}>Hello this is Time component</h4>
);

const Header = () => {
  return (
    <div className="title">
      <h1 style={{ color: "orange", textAlign: "center" }}></h1>
      <h1 style={{ color: "orange", textAlign: "center" }}>
        h1 using functional component
      </h1>
      <h2 style={{ color: "blue", textAlign: "center" }}>
        h2 using functional component
      </h2>
      <h3 style={{ color: "red", textAlign: "center" }}>
        h3 using functional component
      </h3>
      {/* this is component composition */}
      <AnotherComponent />
      {/* {{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent><TitleComponent/>} in JSX?} */}
      {timepass}
      <Time />
      <Time></Time>
    </div>
  );
};

// Create a Header component from scratch using functional component with JSX?

const HeaderMain = () => {
  return (
    <header className="bg-dark">
      <div className="container">
        <div className="child">
          <img src={logo} className="logo"></img>
        </div>
        <div className="child" style={{display:"flex"}}>
          <input type="text" className="search" placeholder="Enter here"></input>
          <button><i class="fa-solid fa-magnifying-glass"></i>Search</button>
        </div>
        <div className="child">
          <ul className="li-items">
            <li><a><i class="fa-solid fa-user"></i>User</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

const rootMain = ReactDOM.createRoot(document.getElementById("HeaderMain"));
rootMain.render(<HeaderMain />);

const root = ReactDOM.createRoot(document.getElementById("rootNestedHeader"));
root.render(nestedHeader);
const root2 = ReactDOM.createRoot(document.getElementById("rootJsxHeader"));
root2.render(header);
const root3 = ReactDOM.createRoot(document.getElementById("HeaderComponent"));
root3.render(<Header />);
