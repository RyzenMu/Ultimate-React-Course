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
