/*
* INITIALIZING STATE WITH A CALLBACK (LAZY INITIAL STATE)
* finally we are going to persist data in our local storage in watch list.
*
*step1: whenever a watch list is updated it will be saved to local storage
* step2: whenever the app is reloads, it will first collect the saved data from the local storage and render it.
*
*local storage can be used for a specific domain i.e. for a specific page only.
*
* data saved for on web address cannot be used for another web address.
*
* localStorage.setItem('watched', ([...watched, movie]) )
*
*we need to convert the data to string in-order to save it to the local storage
*
* local storage can be used in two ways one by using event handlers and another by using useEffect.
*
*for initializing the state , use call back function to retrieve data from local storage.
*
* localStorage.getItem('watched') will give the object.
*
*the callback function should be a pure function without any arguments.
*
*these callback function will be executed only once during initial render.
*
*these local storage improves user experience.
*
* we synchronized our watched with local storage so when we delete watched in ui it will reflect on local storage
*
* we get the synchronized advantage by using the useEffect instead of event handler.
*
* SUMMARY OF USESTATE:
* 1. create state using simple method and call back method. the call method is also known as lazy evaluation. functions must be pure and accept no arguments. Called only on initial render.
* 2. the state can be updated simply and based on the current state (using callback (c)=>c+1;). the preferredd way of updating state is using callback. Never mutate objects or arrays. Instead create a new object or array .
*
* HOW NOT TO SELECT DOM ELEMENTS IN REACT:
* 1. let us automatically focus on the search input field.
* 2. to do so document.querySelector('.search').focus() inside useEffect().
* 3. react is declarative, manually selecting the element is not react way.
* 4. So we use a new concept of Refs.
*
* INTRODUCTION TO ANOTHER HOOK: USEREF:
* 1. refs are the easiest hooks of all.
* 2. ref stands for reference.
* 3. it is like a box, we can keep information with renders.
* 4. "Box" (object) with a mutable .current property that is persisted across renders ("normal" variables are always reset).
* 5. we can write and read from the ref using .current
* 6.two big use cases
* 6.1. Creating a variable that stays the same between renders (e.g. previous state, setTimeout id, etc.)
* 6.2. Selecting and storing DOM elements.
* 7. refs are for data that is NOT rendered: usually only appear in event handlers or effects, not in JSX (otherwise use state).
* 8. Do Not read write or read .current in render logic (like state).
* 9. reading state/.current in render logic will create a unnecessary side effect.
* 10. refs are like states but has less powers.
* 11. both refs and state persisted across renders
* 12. updating state will cause re-render
* 13. updating ref will NOT cause re-render
* 14. state are immutable
* 15. refs are mutable
* 16. state is asynchronous updates
* 17. refs are synchronous update.
*
* REFS TO SELECT DOM ELEMENTS:
* 1.3 steps to use refs
* step1. initialize ref with useRef. for DOM elements use null as a parameter.
* step2. fit that variable to the desired element. in our case is input element.
* step 3. put variable and use it inside useEffect.
* . add new feature focus on pressing enter key
*
*
* REFS TO PERSIST DATA BETWEEN RENDERS:
* 1. A normal variable will always reset to 0 during re-renders.
* 2. so use useRefs in React for counting.
* 3. state --> re-render -->persist
* 4. ref --> persist --> no re-render
* 5. variable --> no re-render--> no persist
*
* CUSTOM HOOKS:
*1. custom hooks are all about reuability
* 2. React we can reuse 1.UI Component 2. Logic
* 3. Logic can be reused by 1. regular function(does not contain any hooks) and 2. Custom hooks
* 4. Allow us to reuse non-visual logic in multiple components.
* 5. one custom hook should have one specific purpose, to make it reusable and portable (even across multiple projects).
* 6. lot of custom hook libraries are available in npm.
* 7. custom hooks are made out of react hooks, so hooks rules apply.
* 8. custom hook is like a regular js function, which accept and return array/objects(in most cases).
* 9. unlike components, can receive and return any relevant data (usually [] or {})
*10 components always return JSX.
*11. custom hooks need to use one or more react hooks.
* 12. prefix 'use' in all custom hooks.
*
* CREATING OUR FIRST CUSTOM HOOK:
* 1. custom hooks are like public API.
* 2. arrow functions are not hoisted.
*
* CREATING USE LOCAL STORAGE STATE HOOK:
* 1.
*
* CREATING USEKEY HOOK:
* 1.
*
* CREATING USEGEOLOCATION:
* 1.
*
*
* CLASS BASED REACT:
* 1. we used to write components as classes..
* 2. you might encounter them in old codebases
* 3. feel free to skip this section
*
* OUR FIRST CLASS COMPONENT:
* 1. classy-weather show the weeather of a city for next 6 days.
* 2. use class keyword class name exrtends React.component to initialize a class.
* 3. import React from 'react' for all components.
* 4. export default counter;
* 5. React.component gives couple of methods one of them is render.
* 6. render is similar to the function body  of the function compoenent.
* 7. Every single class component should have a render method.
* 8. these render function should return some jsx
* 9. hooks are only for class components.
* 10. to get state we need to call the constructor function.
* 11. super method within the constructor call the parent constructor.
*
* EVENT HANDLING IN CLASS COMPONENTS:
* 1. Handler functions are declared as class methods.
* 2.
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
* */