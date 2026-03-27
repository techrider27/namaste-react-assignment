# useContext vs Redux?
useContext is a hook provided by React which is used to manage global state or pass data across components in React applications. It allows data to be passed through the component tree without the need for prop drilling, which is suitable for managing a smaller amount of global state in smaller or medium-sized applications.

Redux is a state management library that provides a single global state store to manage the entire application's state. It uses concepts such as actions, reducers & store. It becomes useful in larger and more complex applications.

# Advantage of using Redux Toolkit over Redux?
Redux Toolkit is a modern utility package that simplifies the process of working with Redux. It is designed to address some of the common pain points and boilerplate associated with using plain Redux.

1. Less Boilerplate Code
2. Easier Async Operations
3. Simple Store Setup
4. Build-in Devtools Support
5. Encourages Best Practices
6. Faster Development

# Explain Dispatcher?
A Dispatcher is not a standalone concept its a term often used to refer to a function called dispatch. The dispatch function is a key part of the Redux store, and it plays a crucial role in the Redux data flow.

# Explain Reducer?
In Redux Toolkit, the createSlice function is commonly used to create reducers. It simplifies the process of defining actions and the corresponding reducer logic, reducing boiler plate code.

# Explain slice?
A Slice is a collection of Redux-related code, including reducer logic and actions, that corresponds to a specific piece of the application state. Slices are created using the createSlice utility function provided by Redux Toolkit. The primary purpose of Slices is to encaspulate the logic related to a specific part of the state, making the code more modular and easier to manage.

# Explain selector?
A Selector is a function that extracts specific pieces of data from the Redux store. It allows us to compute derived data from the store state and efficiently access specific part of the state tree. It plays an important role in managing the state in a clean and efficient way.

# Explain createSlice and the configuration it takes?
createSlice is a utility function provided by Redux Toolkit that simplifies the process of creating Redux slices. A Redux slice is a piece of the Redux store that includes a set of actions, a reducer and an initial state. It helps reduce the boilerplate code associated with defining actions and the reducer for a specific slice of our Redux store.

The configuration it takes
1. name (string) - A string that identifies the slice. It is used as the prefix for the generated action types.
2. initialState(any) - The initial state value for the slice. This is the starting point for our state before any actions are dispatched.
3. reducers (object) - An object where each key-value pair represents a reducer function. The keys are the names of the actions, and the values are the corresponding reducer logic.
4. extraReducers (builder callback) : A callback function that allows you to define additional reducers outside of the reducers field. It is called with a builder object that provides methods for adding reducers based on other action types.
5. slice (string) : An optional string that specifies a slice of the state to be used with the createAsyncThunk utility. This is useful when working with asynchronous actions.
6. extraReducers (object) : An alternative way to define extra reducers using an object directly. Each key represents an action type, and the value is the corresponding reducer function.