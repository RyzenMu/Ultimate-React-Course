codesandbox.io
https://api.adviceslip.com/advice
new Date().toLocalTimeString();
react.dev > references

The two Most Important options to setup react are:

1. create-react-app (build tool)
2. vite

create-react-app:
a. it is a complete starter kit
b. it comes with eslint, Prettier, jest, developement server, web pack(for module bundling), babel(enabling latest js features) .
c. it was created many years ago , it uses slow and outdated technologies like web-pack.
d. don't use it create a real app.

Vite:
a. Modernbuild tool that contains template.
b. need to manually setup eslint, prettier, jest, webpack, babel, development server...
c. extremely fast hot module replacement (HMR) and bundling.

react recommends to use next or remix for new projects.
vanilla reac is impoertant too.
react frameworks are used for production ready projects and not for learning react.
one needs to react first to learn next or remix.

creating new app using create-react-app:

1.npx create-react-app@5 pizza-menu

4. Essential Javascript for React:
   quokka.js install extension
   command pallete -> quokka.js start
   rest operator should be the last in the array/object
   spread operator
   template literals
   terenary operator
   arrow functions
   function expression
   short circuting with and operator
   short circuting with or opertor
   falsy values
   nullishish coallising operator
   short circuting anfd logical operators
   optional chaining ?. helps in accessing safely nested properties
   functional array methods are map, reduce and filter.
   these functional array methods do not mutate original arrays
   the reduce methods has two arguments, the callback function ND INITIAL VALUE, usually 0;
   the callback function in reduce method also take two arguments previous value and current value;
   Sort method will mutate the array.
   to make immutable array use .slice().

   Always use slice() TO MAKE THE ARRAY IMMUTABLE.

   promises
   async await

5. Working with Components Props and Jsx
   Rendering the root component and strict mode
   import react and react dom
   create component (function)
   render the component
   code Debugging
   Components are the building blocks
   data are passed to the components using props
   Component tree is a plan
   reusing components is the fundamental concept of usoing react
   Component has its own data, logic and apperance.
   JSX -declarative syntax how they look like
   components must return a block of jsx
   Babel is a tool that converts jsx to html
   Babel is automatically included in react
   Browers do not understand jsx, they only understand html.
   we could use react without jsx., but it is cumbersome
   Declarative is we dont tell react how to do
   Jsx is declative
   Imperative is we tell how to do like, create element, add event listerner, etc
   vanilla js is imperative

   Declarative --Describe what UI should look like using JSX, based on current data (props abd state)

   Separation of concerns
   before SPA , there are html page, css page and js page combined for web.
   one technology per page is called separation of concens.
   As pages got more and more interactive SPA originated, js became incharge of html and css.
   react also has separtion of concers, i.e. one component one concern.
   styling in react is using two set of {{}} one for value and another for object.
   passing data between components is called props
   data is passed between parent component and child component through props
   props are essentaial tool to configure and customize components
   with propsparents component control how child component look and work
   Anything can be passed as props single values, arrays, objects, functions, and even components
   props are read only
   data = props + state
   props are immutable
   state are mutable
   props are the data coming from the outside and an be only updated by thye read component
   state is the internal datathat can be updated by the components logic
   props is immutable , it is one of the reacts strict rule.
   Mutating prop would affect parent component, creating side effects (not pure).
   usuallu side effects happen when a function changes data outside of the function.
   react is all about pure functions, so functions without side effects
   components should be pure in props and state.
   these pure components allows react to optimize apps, avoid bugs, make apps pretictable.
   react uses one-way data flow. i.e parent component -> child component
   angular uses two-way data flow
   one-way data flow is essential for more predictable and easier to understand.
   one -way data flow is more performant than two way data-flow

   challenge one - profile Card
   JSX - uses {} to get values
   we can place javascript expressions inside {} like reference variables, create arrays or objects,[].map, ternary operator
   we cannot use javascript statements like if/else, for loop, and switch
   jsx produces a javascript expressions
   key is a prop in react used for performance improvements.
   every key should be unique
   map creates a new array
   foreach iterates a array and does not return any value.
   Always use map in React
   do not use foreach in react jsx
   react do not render true or false
   react do render number 0

   three ways of conditional rendering

   1. short circuting
   2. ternary operator
   3. conditional rendering with multiple returns (early returns)

   destructing objects instead of props.
   React Fragments are used to render all the html elements separately without a parent tag.
   conditionally set classNames and conditionally set text

   6. Handling Events , State , Forms , Controlled Elements in React
      State is the most important concept in react
      there are 3 state concepts, useState, useReducer and Context API
      state is a data that a component hold over a time.
      simple examples are notifications count, messages count, content of a shopping kart
      state varible / piece of state : A single variable in a component
      state is components memory
      updating state causes react to re-render
      state allows you to update components view
      persists local variables between renders
      step 1 -- a new state variable
      step 2 -- use it in jsx
      step 3 --update piece of state in some event handler
      All the react functions prefixed use is called Hooks
      Hooks cane be used only in react.
      hooks cannot be used inside a function/if statement

      Do Not set state manually

      React is all about immutability
      it is a bad practice to mutate state , even it works, in some cases like in big projects this may fail.
      In react, a view is updated by re-rendering a component
      state only deleted when the component is destroyed also known as un-mounting.
      there can be many useStates in the component/app
