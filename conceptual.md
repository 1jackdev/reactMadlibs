### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    React is a Javascript library, generally used to create flexible user interfaces. React excels in quickly making repeatable parts of code, or Components. Also, it allows for very fast and responsive UI's.
 
- What is Babel?
    Babel is a compiler that allows us to write in different languages/syntaxes while still making our code readable Javascript for the browser. 

- What is JSX?
    JSX is a syntax extension for Javascript which allows us to write HTML-looking code that inherently contains JS/React logic.

- How is a Component created in React?
    A component is defined like a JS class, which renders some HTML via JSX.

- What are some difference between state and props?
    Props are generally used when data won't change over the lifecycle of the component, whereas state contains data that could change at some point. Props are read-only, state can be changed. Only props can be accessed by a child component.

- What does "downward data flow" refer to in React?
    It means that data (and functions) can flow from a parent component down to a child component in props. The child has access to these props, but cannot update the parent component (wtithout using a callback function).


- What is a controlled component?
    A controlled component is one that stores form data in its state (i.e. handleChange).

- What is an uncontrolled component?
    An uncontrolled component allows the DOM to handle the form data.

- What is the purpose of the `key` prop when rendering a list of components?
    We use a key prop when rendering a list of components so that React can keep track of components to make updating and re-rendering quicker and without confusion.


- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    Using the index as the key prop for a Component can be troublesome because if we alter the order of the list then an index and key pair could become incorrect/nonexistent.

- Describe useEffect.  What use cases is it used for in React components?
    useEffect is a hook we can use to run logic at certain parts of a component's lifecycle. For example, we could use useEffect to search a DB of user last names, where the search query would update with each change of the query input. 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    UseRef is used to store a piece of data like state, but unlike useState changing the ref value does not cause a re-render. 

- When would you use a ref? When wouldn't you use one?
    You could use a ref to keep track of a certain element on the DOM. We don't want to use a ref for keeping track of changing data, like an input value.

- What is a custom hook in React? When would you want to write one?
    A custom hook is a reusable piece of logic that we use with components. If we use the same function in mulitple places/components, we should pull that out into a hook so that we can simplify our individual components.