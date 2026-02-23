# What is prop drilling?
Prop Drilling refers to the process of passing down props through mulitple layers of components, even when some of those components do not directly use the props.

# what is lifting the state up?
It is a concept that plays an important role in managing the state efficiently across different components. The React allows us to lift the state up to a common ancestor or parent component.

# What is Context Provider and Context Consumer?
Context Provider is a component given by React that allows its child components to subscribe to a certain context. It accepts a value prop which will be shared with all components that are consumers of that context.

Context Consumer is a component that allows components to subscribe to a context. It lets us access the context value and use it withing our components render function.

# If you don’t pass a value to the provider does it take the default value?
Yes, it takes the default value only when there is no maching provider.