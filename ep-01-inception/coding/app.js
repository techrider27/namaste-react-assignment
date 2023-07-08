// using javascript
const headingTag = document.createElement("h2");
headingTag.innerHTML = "Hello World using JavaScript";
const selectRoot = document.getElementById("usingJavaScript");
selectRoot.appendChild(headingTag);

// using react cdn
const heading = React.createElement("h3", {}, "Hello World using React");
const root = ReactDOM.createRoot(document.getElementById("usingReact"));
root.render(heading);

// nested react element

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h4", {}, "I am h1 tag")
  )
);

const root2 = ReactDOM.createRoot(
  document.getElementById("nestedReactElement")
);
root2.render(parent);
