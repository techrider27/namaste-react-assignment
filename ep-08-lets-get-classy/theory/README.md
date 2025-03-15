# How do you create Nested Routes react-router-dom configuration?
We can create nested routes inside a react-router-dom configuration like this 

```const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
```

# Read about createHashRouter, createMemoryRouter from React Router docs?
createHashRouter - It is a part of React Router library which provides routing on hash based approach that allows navigation in the URL.

createMemoryRouter - It is also part of React Router library which does not interacts with browser's URL. It lets us create an in-memory router for testing purpose.

# What is the order of life cycle method calls in Class Based Components?
1. constructor()
2. render()
3. componentDidMount()
4. componentDidUpdate()
5. componentWillUnmount()

# Why do we use componentDidMount?
It is used for specific purpose such as to make API calls, DOM manipulations

# why do we use componentWillMount? Show with example
It is used to perform cleanup & teardown tasks just before a component is removed from the DOM.
```class MyComponent extends React.Component {
 constructor() {
 super();
 this.handleResize = this.handleResize.bind(this);
 }
 componentDidMount() {
 // Add a window resize event listener when the component
is mounted
 window.addEventListener('resize', this.handleResize);
 }
  componentWillUnmount() {
 // Remove the window resize event listener when the compo
nent is unmounted
 window.removeEventListener('resize', this.handleResize);
 }
 handleResize(event) {
 // Handle the resize event
 console.log('Window resized:', event);
 }
 render() {
 return <div>My Component</div>;
 }
}
```
# Why do we use super(props) in constructor?
We use super(props) because it allows accessing the props in constructor.

# Why can't we have the callback function of useEffect async?
We can't have the callback function of useEffect async because it expects it's callback function to return nothing or return a function or a cleanup function.

