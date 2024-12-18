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

4.  Essential Javascript for React:
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

5.  Working with Components Props and Jsx
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

6.  Handling Events , State , Forms , Controlled Elements in React
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

Developer Tools
chrome console, react dev tools
update state variable based on current state
each component manages its own state
UI is the combination of various components in their respective states
Ui is nothing but changing state in time
Always create a new state to track a data in time
for dynamic change use state
updating state happens in event handler
when building component, image of data changing over time
for data that should not trigger re-render, use normal variable and do not use state.

Windows + period. => emoji

we use form tag in react as we already used in html
we use select tag for selection
we use option tag for options inside selection
Array --> from will make the array and array map function
form tag has an attribute onSubmit={} which will happen when submission happened
event.preventDefault() should be used in React/SPA, to prevent re-rendering
if we pass function on button it will happen only if the form is clicked
submission happens even when we press enter tab when the functio is presented in the form tag with attribute onSubmit
the form objects will be preseted in the event
event the form data
we can get the data from event.target.input
react does not recommed us to take data from data.target.input
instead react suggests us to get form -data using controlled elements

Controlled Elements
-it is used to take the form data for procesing
-input field, selection field and text area field are called controlled elements.

- these controlled elements have their own state inside the DOM
  -we want the data to be in the react and not in the dom
- in order to do that we use technique called controlled elements.
- there are three steps to take data to state
  -1.useState
  -2. incude inside jsx
  -3. event.target.value --> transfer the data fro form to state
  -for quick id always use Date.now()

State vs Props:
-state is internal data and props are external data
.state is components memory
.props are similar to functional parameters passed from parent component to child component
. state can be updated component itself causing re-render
. props are read only they cannot be modified
. Receiving new props will causes components to re-render. usually whenthe parent's state is updated.
. used by parent to configurechild component

Flash Cards:
.

7.Thinking in React State Management
.One of the core skill is thinking in react
. state management is key to react development
. react requires different mindset , it is different from vanilla
. how to work with react APi like useSate,
. When to use react tools components, state, props, hooks, effects, etc..
. Thinking in state transitions , not element mutations
. 1. establishing the component tree.
. 2. build a static version of the application (without state).
. 3. think about state.
. 4. establish data flows, from parent to child,
. 5. state and data flow is called state-Management

fundamentals of state management:
. managing state is the important part of react
. state management : Deciding when to create pieces of state, what types of state are necessary, where to place each piece of state, and how data flows through the app.
. each piece of state a home
. state can be placed inside parent component or global state
. local state needed only by one or few components
. state is defined in a component and only that component and child component have access to it.
. state known to only for search bar
. Global state is one that is needed by many components.
. shared state that is accessible to every component in the entire application.
. these global state can be managed using contextAPI which comes with react or use external library like REDUX
. always start with local state, move to global state when you truly need it.

State: When and Where
. when you need to store data
. will data change at some point
. if data will not change use const variable.
. if data changes then consider the state can be computed from existing state/props.
. then Derive state
. Ref (useRef) is one which persists the state but do not re-render the component
. place a new piece of state in component
. if used by only one component simply leave it in that component
. if needed by child component just pass the state using props
. if used by one or a few sibling compoenents, lift state up to first common parent
. This is called lifting state up.

FAR AWAY:
. Anything can be passed as a prop
. functions can be passed as a prop

LIFTING UP THE STATE:
. sharing one piece of state with multiple components
. ckeout part in udemy is an app
. it has several components
. promotions component -- list of coupouns -- an componnt
. total component also requires coupoun state
. we cannot mutate props
. we can also send set function down the component (to child component using prop) which will update prop in the parent component
. this technique is called inverse data flow or data flowing up.

DELETING AN ITEM (updating state in parent component):
. we cannot directly pass prop from parent to grand child, but only through the child
. we only can pass state/setstate in App through packingList to Item.

Adding Checkbox to Far Away App

Derived State:
. derived state is computed from an existing piece of state or from props.
. One state should not depend on another state
. updating one state will re-render 3 -times if two state depend on another one.
. just use derived state as regular variable
. keeep one state as single source of truth
.

SORTING ITEMS IN FAR AWAY:
.use select tag and option tag for inputing.
.to sort by ascending use a.description.localeCompare(b.description).
.WIndow.confirm('Are you sure')-- creates an alert box, if yes then only next line executes.

MOVING FILES : ONE COMPONENT PER FILE :
.use folder "components" and move components there.
. always use export defaut
. do not use named function

ACCORDION:
. use condition rendering to render answer, icon and css classes

THE CHILDREN PROP: MAKING REUSABLE BUTTON:
.do not use self closing of components
. write the components as usual html
. write children in the prop
. write {children} where it is needed
. children prop will leave a hole in the Component
. write any html markup between component tags
. used in modal window, generic button etc

EAT AND SPLIT:
. displayed in the input tag disables the input , no one can edit.
. use label tag for forms
. every form tag should have e.preventDefault() to stop disapperaing
. in Button component use onClick as a function to resemble onclick in button tag and vice versa
. on form ubmit ado not use arrow function
. on form submit always use new separate function
. on form submit do not call the function , just enter the name.
. https://i.pravatar.cc/48" api gives different images randomly when called , so in order to fix to a constant image we attach a another uuid to the end.
. react is all about immutability
. when a prop is not used by a component but it pases to its children prop then it is called prop drilling.
. for input text elements use empty string '' instead of 0
. always use optional chaining for initial conditions.
. use guard clauses when the submitting happens on empty input fields
. Built small projects like shopping list, gold(goal) tracker, conference speaker list,

Mini Project -- Shopping Kart
. react will not detect the array methods
. romove the item immutably

pART 2 - INTERMEDIATE
. building ui
. layouts
. fetching data
. custom Hooks
. setting up fiber

THINKING IN REACT COMPONENTS COMPOSITION AND REUSABILITY
.think about components
.compositon
.reusability
.split a component
. building layouts
. . building layouts

COMPONENTS:
. classify components based on its size.
. do not create small or large components
. create medium components
. 4 criteria for for splitting UI into COmponents
. 1. logical separation of content
. 2. reusability
. 3. responsibility
. 4. personal working style
. new components create new abstrations which require more mental energy
. name a component on what it displays or what it does.
. do not create a new component inside another component
. no nesting components
. small components are mostly reused
. large components are less reused
. when a component is called inside the same component the react will be in infinite loop.

COMPONENT CATEGORIES:
. 1. Stateless or presentational components.
. 2. Stateful components
. 3. Structural components
. Structural Components are pages, layouts and screens
. Structural components can be seen in large Apps.
. Prop drilling will create havock if passes betwen > 7 components.
. to mitigate prop drilling we use component composition.

COMPONENT COMPOSITION:
. component composition is a technique whwere we can use a component inside another component using a children parameter.
. it is combining different components using children prop.
. creates highy reusable and flexible components.
. it can fix prop drilling problem.
. it is great for creating layouts.
. it is possible beacuse it need to be know children in advance.
. inside {} 1.e. javascript do not use {children}, this will create a new object with children,
. only one set of {} is enough for children/props.

CREATING REUSABLE BOX or REUSABLE COMPONENT:
. if two or more components are very similar we can use resuable components
. in those reusable components we pass children to differtiate one another.

PASSING ELEMENTS AS PROPS (ALTERNATIVE TO CHILDREN):
. instead of children use 'element'
. these passing elements as props is useful in React Router.
. in case of two or more elements to be passes use fragments <></>
. shortcut to go to specific component is Ctrl + click on the component.

BUILDING A REUSABLE STAR RATING COMPONENT:
.when in-line style is used the style code must be outside components,
. so that it will not be re-rendered , which increases speed.
. attribute role="button" is used for accesebility.
. Array.from({length:5}, (\_, i)=>{})
. jsx does not have hover event , so use onmouseenter and onmouseleave

PROP AS AN COMPONENT API:
.there are two persons one is componnet creator and other is component consumer.
. both merge on component APi
. these are used very well in teams.
. component props as public APi
. while creating a component have a mindset of there being a creator and consumer of component.
. crerator is a person who builds a component.
. creator defines what props the component can accept.
. while the consumer uses the component, some where in the application, specifing value for the props.
. one can have a mindset of props as public api of the component.
. so naturally we are creating public interfacce of the component .
. cretor defines how much complexity, expose to the consumer of the api.
. this allows consumers to interact with the components through props.
. while defining props, we should decide on how strict we want to be.
. like how many props we should enable for confoguration.
. for example in weather application, we could allow only one prop, for location , where the consumer wnats the weather.
. this too little prop is not flexible enough, might not be usefuk.
. in case of too many props --> this will make the app way hard to use for the consumer.
. it will expose too much complexity.
. very hard to write code.
. strike a balance between too little and too plenty props.
. give goog default values for many of them.

IMPROVING REUSABILTY WITH PROPS:
. to use star rating component in many places in code or to publish it to npm package for many developers, we shpuld use component API.
. other developers mighht want to change color or size of the stars or might make other changes.
. so we should find a good public api .
. we are using className in component props to chane the text style etc, according to consumer's perference.
. we can use text istead of showing star number., these can be passed as another prop. as an array
. another feature is to allow consumer to have default rating
. never initialize state from props.
. we can also allow consumer to vary different color to different stars, where should the messages be present, different spacing between the different stars,
. passing a state of one component to another component.
. the movie rating should be passes to another component as state updated.

PROP TYPES:
. if we set different prop type then the component will not work.
. instead of color prop as text , if we give number then the component will not work.
. use array type if [] is specified, does not use object as a type for array.
. while using a function as a type type "func" just first 4 letters of function.
. import PropTypes from prop-types
. prop-types package is installed by default by create-react-app.
. syntax for proptypes is as follows
componentName.propType = {
size : PropType.number,
className: PropType.string,
messages : PropType.array,
onCLick : PropType.func,
}

. these proptype will show error in the console for our identification.
. besides these we have PropType.bool for boolean
. besides these we have PropType.object for objects.
. if we use typescript, proptypes is not required.

STAR RATING COMPONENT:
. first Array.from creates 5 div's with its constant index value starting from 0, 1, 2, 3, 4.
. create a state called rating and function setRating using useState and initialize to 0
. onMouseOver function on div set the rating state to index +1
. compare constant index with variable rating(i+1).
. i < rating ? <FullStar/> : <EmptyStar>
. button style for same as text is as follows:

border:none,
background:none,
font: inherit

11. HOW REEACT WORKS INSIDE:
    . helps to become better and more confident react dev
    . this will be bit intense
    . watch atleast the final lecture.

COMPONENTS,INSTANCES AND ELEMENTS:
. Component is a single piece of ui,
. component is a simple js function returns react elements written in jsx.
. it is a blueprint or template.

. component instances
. using component react creates one or more instances.
. in the project 4 instances of <Tab/> component is created.
. React internally calls 4 Tab() functions.
. Actual physical manifestation of a component.
. Each instance i.e each of 4 <tab/> has its own prop and state.
. Eac instance or <tab/> has its own life cycle. (born, live, die)
. Component Instances cerates one or more React Elements.
. Jsx is converted into React.CreateElement() function calls.
. this reults in react element.
. React element is a big immutable Js Object, that react keeps iin memory.
. The React Object is storing nessesary information to build a Dom. elements.
. this Dom elements is painted on the browser.
. Actual Visual represenattion of the compoenent instance in the browser.

INSTANCES AND ELEMENTS IN PRACTICE:
.$$typeof is a security feature implemented by react.
.$$typeof protdct us againdt cross-side scripting attacks.
. Symbol is a javascript primitive which cannot be transferred by a json.
. means Symbol cannot come from a api call.
. so attacker cannot send a react element via json, thus we are protected.
. react internally calls components.
.While component is called the type is -- Differentcontent or the name of the component.
. while calling component as a function type is --Div.
. when we render react we want to see the component instance and not the div.
.array.at(activeTab) is simply the sauare notation = array[activeTab].
. the TabConention accepts an object as a parameter so
. in react we pass as <TabContent item={array.at(activeTab)} />.
. in js we pass as TabContent({item: array.at(activTab)})
. if we render component as a function it will be not shown in component tree.
. if a componet is used as a function its state will be managed by the parent state. in our cause we have two states.
. if a parent component has one children componet, only the state of the parent component will be shown along with children component, while clicking on children component the state os children compoenent will be shown.
. never call component as functions as it will violate the rules of the component.

HOW REACT RENDERS:
.COMPONENT --> COMPONENT INSTANCE --react.createElement --> REACT ELEMENT --> DOM ELEMENT --> UI on screen
. whwn state is updated , re-render happens.
.Sate changes --> render is triggerred --> render phase(Dom updation) --> Commit phase --> Browser Paintint
. In react rendering is not updating DOm or displaying elements on the screen.
. but rendering happens only inside react, it does not produce visual changes.
. previously we taught rendering means seeing UI on the screen.
. react actually manupulate DOm in commit phase like DOm creating, updation, deletion, inserting, etc..
. after commit phase browser repaints the screen.
.Phae1 -- Trigerring of render
. there are only two ways in which the render is trigerred.
.1. initial render of application.
.2. state is updated in one or more components. (also known as re-render)
. the render process is trigerred for the entire application.
. the render process is not trigerred for one single component.
. in practice it looks like the re-render happens only in the component where the state is changed.
. but that;s not how the react works behind the secne.
. renders are not trigerred immediately,
but scheduled for when the js engine has some "free time"
there's also batching of multiple setState calls in event handler..
.Phase 2 - The REnder Phase.
. event handler --> state update --> re-render
. rendering means calling component functions.
. rendering is not about Dom Changes.
. at the begining react will go through entire Component tree taje all the Component instances that trigerredd a re-render and actually render them.
. means to call corresponding component functions, this will create updated react elements whick all together form virtual DOM.
. VIRTUAL DOM (REACT ELEMENT TREE)
. on initial render, react will take the entire component tree, and tranform it into a one big react element.
. this is called react element tree.
. this react element tree is called Virtual DOM.
.VirtualDom -- Tree of all react elements created from all instances in the component tree.
.it is really cheap and fast to create multiple trees like this. even many iterations is neededd.
. because the tree is just a javascript object.
.VIrtual DOM is most hyped among people.
. But thinking VirtualDom is just a js object, now it is not a big deal.
.SOme people confuse it with Shadoe DOM.
.Shadoe DOM is nothing to do it with react.
. Shadow DOm is used in Browser teachnolgy in web components.
. Suppose a State is updated in COmponent D, which offcouse re-render entire tree, the react will again call the function D again, and place the new react element in a new React Element Tree(New Virtual DOM).
.Rendering or re-rendering a component will cause all of its child components to be renderedd/re-rendered ass well (no matter if props changed or not).
. if the highest component in the tree is rendered, then the entire application is re-renderedd.
. React plays it safe and re-renders everything.
. This does not mean the entire DOM is updatedd, but only the virtual DOm is re-created, which is not a big issue in snall and mediwm size application.
. The new Virtual DOM after the state update will get re-conciledd(+ Diffing) with current fiber tree (before state update)
. This reconciliation will be done in reatct re-conciler called Fiber.
. React reconciler is called Fiber.
. The result of the reconciliation process will be the Fiber Tree which eventually write to the DOM.
.RECONCILIATION
.The reason behind we use Virtual Dom is writing to virtual DOm is CHeap and Fast, but writing to Original DOm will be SLow and dearer. It will be extremely inefficient and wasteful
. Usually (state change) Only a small part of the DOm needs to be updated. rest can be reused.
. During initial render it will load from scratch thus ineffiecient, after updation is very fast.
. For exapmle in Udemy website, if a button is clicked which generates a modal, then only the modal will change, the rest of the components will remain the same.
. React is efficient by reusing the existing DOm tree .
. Reconciliation means deciding which DOM elements actually need to be inserted, deleted or updated, in order to reflect the latest change.
. The result of the reconciliation process will be a list of dom operations that are nessasary to update the current dom, with a new state.
. Reconciliation is processed by a reconciler, this reconciler is the engine of the react,,
. reconciler is the heart of react.
. This reconciler alows us to never touch the DOM directllly.
. Reconciler tells the react the next snapshot of the UI should look like, based on state.
. the current reconciler in ract is called FIBER.
. During the initial render of the application, fiber take the entire react element tree (virtual dom), based on it builds another tree, which is fiber tree,
.Fiber tree is a internal tree that has "fiber" for each component instance and DOM element.
. Unlike react elements is virtual dom, fiber are not re-created on every state change or render,
. so fiber tree is never destroyed,
. instead the fiber tree is a immutable data structure, once after createdd during initial render, it simplu mutated over and overr again in future reconciliations,
. This makes fiber to keeping track of changes /things like Current state, props, side effects, used hooks, and more.
.Actual state and props of any component instance that we see on screen are internally stored onthe corresponding fibre in the fibre tree.
. each fiber also contains queue of work like updating state, updating refs running registered side effects, performing dom updates, and so on...
. fiber is also defined as the unit of work.
. fibres are arranged different than react element tree,
. they are not arranged like a parent-child relationship.
. Fibres are arranged like a linked list.
. each parent have only one link to its first child, this first child have link to its siblings.
. both react element tree and fiber tree consists of regular dom tree.
.Both react element tree and fiber tree are complete representation of DOM structure. and not just of react components.
. fibers are unit of work, one extreme characteristic of fiber reconciler is work can be performed asynchronously.
. this means the rensering process, what the reconciler does can be split into chunks, some tasks can be prioritized over others and work can be paused , reused, or thrown away, if not valid any more..
. these rendering process happens automatically behind the scceenes.
. the pracctical uses of asynchronous rendering are 1. it enables the modern - concurrent features - like suspense ot transitions, starting in react 18. it also allows the rendering process to pause and resume later so that it wont block the browsers javascript engine which too long renders. which can be problamatic in large applications.
. this is possible becaus ethe render phase does not produce any visible output to the dom yet.
. RECONCILIATION IN ACTION.
. during a state change , a new virtual dom is created (Complete app is re-rendered)
, All Children of re-rendered element are -re-rendered along with the parent element in which the state is updated.
. Now the new Virtual dom should be reconciled with the current fiber tree, which will result in the updated fiber ree.
. this Update Fiber Tree is also known as WOrk In Progress Tree.
. whenever reconciliation needs to happen, fiber walks through the entire tree step by step and analyses what need to be changed between the cureent fiber tree and updated fiber tree based on the new virtual DOM.
. This process of comparing step by stepis called diffing.
. Diffing is comparing elements based on their position in tree.
. The Updated Fiber tree will mark new work related to dom mitations,
. first the btn compoenent has new text,
. the work need to be done in the fiber is a dom update.
. in this example code is is swapping code from hide to Rate.
. Next the Modal, Overlay, h3 and button which is another component and not present in updated virtual DOm will be Marked as DOM Deletions.
. The Video Component will be re-rendered because it is the child compoenent of App Component.
. but it actuallu dod not change.
. so as a result of reconciliation
. The Dom will not be Updated in this case
. Once this process is over, all the DOM mutations will be placed in a list called list of Effects.
.This List of effects will be used in the next phase Called Commit Phase.
. The Commit phase actually mutate the dom.
. the result of the render phase is the updated fiber tree and the list of DOm updates.
. react not yet written anything to the DOm.
.PHASE 3 -- COMMIT PHASE
. in commit phase react finally writes to the dom
. React writes to the dom -- insertions, deletions, updates (list of dom updates are "flushed" to the DOM).
. writing to dom elements in one go.
. committing is synchronous: DOM is updated in one-go, it can't be interuptted. This is necesasarry so that the DOM never shows partial results, ensuring a consistent UI (in sync with state at all times).
.rendering phase can be paused
. commit pahse always happen in one go because, Dom never show partial results.
. The reason why render phase is pasued and continued and commit phase happens in one is The DOm nevwe shows parttial results.
. After the commit phase completes, the workInProgress fiber tree becomes the current tree for the next render cycle.
. Remember that Fiber tree are neverr discarded and never re-created from scratch, instead they are reused in order to save precious rendering time.
. the commit phasse is now completed.
.THE BROWSER PAINT PHASE
. the the Browserr notices that the dom has been changed and as a result it will paint the screen whenever it has the idle tile.
. now this DOm updayes are visible to the user in the form of updated user interface.
. render phase id done by eract
. browser phase is done by browser.
. but the commit phasse is done by React-DOm libraray.
.react itself never touches the Dom, in fact it has no idea, where the result of render phase is committed and painted.
. the reason for react not doing commit phase is that the react waas designedd for independently for elements will actually be shown.
ract can be worked with different platforms so calledd hosts.
. 90% of the cases we use react for weebdevelopment,
. but with help of otherr hosts , 10% react is used for andriod app development and ios app development called called cross-platform mobile app development.
. We can laso build videos with react using Remotion.
. WE have use various applications msword, pdf, figma designs so called renderers (platforms).
. the render's will not render, but commit the results of render phase, (weird terminology tho),
. In all other situations of the render phase not really a list of dom updates, but a list of updates of whateverr elemets are used in the host, that's being used, so the term virtual dom doesn't make much sense.
. react team names it as react element tree.
. react doesnot write to Dom.
. react writes toa a host, in this case it is a React Dom , this react dom writes to the DOM.
. as earlier mentiond react has various host.
. Summarise ALL The Phases.
.1. trigger Phase - happens on initial render and state updates
.2. Render Phase - which does not produce any visual output, this phase starts by rendering all the instances that need a re-render, in react rendering means simply calling react functions. This will create one or more react elements which will be placed ina a new virtual dom (which is a simple tree of react elements), rendering a component means rendering all of its child component as weell (no matter if props changed or not). This is beaciuse react doen not know whether the child components are affected or not by the parent component, for the sake of safety , the react will render the component and its childs.This new Virtual DOm wwill bw reconciled with the current fiber tree (representation of Dom before state update). This happens because constructing entire dom tree is really slow. Reconciliation will reuse much of the components a s posiible, by finding the smallest number of dom updates that reflect the state update on the screen, this reconciliation process is done by using a reconciler calledd Fiber, which works with a mutable data structure, calledd the fibre tree, in this tree for each react element and dom element there is a fibre, this fibre holds the actual compoenent state, props and a queue of work. After reconciliation this queue of work will contain dom updates, that are neede for that element.
now the computation of the dom updates are performed by a diffing algorithmn which step by step compares the elements in the new virtual dom with the elements in the current fiber tree, the result of this reconciliarion process is the second uodated fiber tree and a list of all necassary dom updates, it is impoertant to know that reender phase is asunchronous, so fiber can priortize and split work into chunks and pause and resume work later, this is necessaary for concurrent feaatures, and also prevents js engine to be blocked by complex rendering process,
3.the ouput of the rendder phase (list of updates) will finally actually be written to the dom in the commit phase, so in this phase so called a render (in this case React-DOm) will insert, delete and update DOM elements, so end up with an updated dom that reflects a new state of the application. Unlike the renderr phase , the commit phase is synchronous, so all the ddom updates are performed in one go in order to ensure consistent ui over time, now once the browser realises that the dom hass beeen updated 4. It starts the new browser paint
in order to visually represent on the screen

HOW DIFFING WORKS:
. diffing is base on two fundamental assumptions,
. 1. two elements of different types will produce different trees,
. 2. elements with a stable key prop stay the same across renders
. this allows React to go from 1, 000, 000, 000 [O(n3)] to 1000 [O(n)] operations per 1000 elements.
. 1. SAme position, Different ELement. --- in this casse react assumes entire sub-tree is no longer valid. so Old componnets are destroyedd and removed from DOM, including state. Tree might be re-bult if children stayed the same (state is reset). The Same is appled for React Compoent as same as DOm ELement like <div> 2. SAme Position, Same Element -- Element will be kept (as weell as child lements), including state. this works for Dom elements and react and react elements as well. new props / attributes are passed if they changed between renders. some times this is not we want.. Then we can use thet key prop. So we want new element with different state this give rise to KEYPROP.

DIFFING RULES IN PRACTICE:
.
. Key Prop - is a special prop that we use to tell the diffing algorithm that an element is unique.
. key prop works for both dom elements and react elements.
. key prop allows React to distinguish between multiple instances of the same component type.
. when a key stays the same across renders, the element will be kept in the DOM (even if the position in the tree changes).
. 1. using keys in the lists
. when a key changes between renders, the element will be destroyed and a new one will be createdd (even if the position in the tree is the same as before)
. example: without keys : same elements, but different position in tree, so they are removed and recreatedd in the DOM (bad for performance).
.example: with keys : even the position changes with keys, the will not be re-created during rendeers, so the elements will be kept in the DOM (good for performance)
Always use key when using same components , in this case <Question>
. 2. using Key Prop to reset state -- if we have the same element at the same position in the tree, the DOM element and state will be kept. Now the Answer state was perserved Not we wanted, if we give unique key with same prop the state was reset

KEY PROP:
. If we give Key same to components , react will consider as a unique component insatnce.
.
RULES FOR RENDER LOGIC : PURE COMPONENTS
. There are two types of logic in react components.

1. Render Logic
2. Event Handler Functions.

Render Logic:
. code that lives at the top level of the component function.
. participates in describing how the component view lloks like.
. executes every time the component renders.

Event Handler Functions:
. executed as a consequence of the event that the handler is listening for (change Event in this example).
. Code that actually does things: update state, perform an HTTP request, read an input field, navigate to another page, etc.

REFRESHER: FUNCTIONAL PROGRAMMING PRINCIPLES:
.Side effect: dependency on or modification of any data outside the function scope. "Interaction with the outside world". Examples: mutating external variables, HTTP requests, writing to DOM.
. Any muation outside the scope is a Side-effect.
. side effects are not bad! A program can only be useful if it has some interaction with the outside world.
. Pure Function: a function that hass no side effects.

PureFunctions:
. Does not change any variables outside its scope.
. Given the same input, a pure function always returns the same output.

Impure Functions: gives unpredictable output.

Rules for Render Logic:
. Components must be pure when it comes to render logic: given the same props(input), a component instance should always return the same JSX(output).
. render logic must produce no side effects: no interaction with the "outside world" is allowed, So in render logic:
-- Do Not perform network requests (API calls).
--Do not start timers.
--Do not directly use the DOM API.(add Event Listener).
-- Do not mutate objects or variables outside of the function scope. (this is why we cannot mutate props).
-- Do not update state (or refs): this will create an infinite loop.
-- Do not use console.log() & random numbers.
. Side effects are allowed (and encouraged) in evevnt functions!. There is also a special hook to register side effects (useEffect).

STATE UPDATE BATCHING:
.Renders are not triggered immediately, but scheduledd for when the JS engine has some "free time". There is also batching of multiple setState calls in event handlers.
. It is a performance optimization technique, on one click 3 setState()
will be re-rendered in one go , not one re-rendering for one state.
. Just one render and commit per event handler.
. Do not console log into batching, because the render is asynchronous and not uodatedd yet.
.if we need to update state based on previous update, we use setState with callback (setAnswer(answer=> ...)).
.Automatic Batching for timeouts and prommises are available from react 18.
. before react 18 if reset function is called then batching will not happen and render 3 times one by one.
. From react 18 native events like el addEventListener('click', reset) is also batched, earlier native elements were not batched.
.We can opt out of automatic batching by wrapping a state update in ReactDOm.flushSync() (but you will never need this).
. updation of state is asynchronous , in a batch if same state is updated three times, the result will be the state will be updated only once.
. in this casse state is stale.
. use update as a callback function insteadd of a value.

HOW EVENTS WORK IN REACT:
Dom Refresher : Event Propogation and Event Delegation:

1. Capturing Phase -- when an btn is clicked , an event object is created at the root the document and trqvels until it reaches the clicked btn.
2. Target element -- is the element in which the event is trigerred.
   . at the target we can choose to handle the event by passing a function.
3. Bubbling Phase -- the event will start from target element and reach to the top (root of the document).

Two impoprtant points to note is :

1. During capturing phase and bubbling phase , the event is passed through every child of the element.
2. By default the event handlers listen to events on the target and during the bubbling phase.

means that when an handler function is set on one of the parent , then both the target function qnd the parent function will be called, which is not we wanted.

In this casse we can prevent bubbling with e.stopPropogation().

Using the Bubbling property , developers found event delegation.

Event Delegation: handling events for multiple elements centrally in one single parent element.

1. instead of adding event handlerr to 1000 buttons , add only one event handler to first parent element (div).
2. check for target element. (e.target).
3. if target is one of the buttons handle the event.

Event delegation is mostly used in vanilla js.
React mostly dont require event delegation technique.

1. some times strange behaviours may happen in react apps.

React registers all event handlers on the root DOM container.This is where all evevts are handled.

Behind the scenes react performs event delegation for all the events in pur application.

React one event handler per event type.

in React if One Click is happened , the event will pass from head of the document to the tatget and travel up (bubbing phase ) from target to root element when the event will match with the corresponding handlers & target element and executed.

DOM tree is important than component tree.

if one component is child of another component in component tree, then it is not true for DOM tree.

Synthetic Events:

1.Wrapper around the DOM's native event object. 2. HAs same interfacce as native event objects, like stop propogation() and prevent default. 3. Fixes browser inconsistencies, so that events work in the exact same way in all browsers.

Most synthetic events bubble (including focus, blur, and change ), except for scroll.

Rules for Event Handlers in React:
. Unlike vanilla js , the event handlers are named using camelCase (onClick) in vjs => onclick.
. in vjs whenever we want to stop the default behavior of the browser in response to an event, we can return false, from the event handler function.
one big example of that is browser reloading the page after submitting.
. if we return a false in react event handler that will not work,
. the only way to prevent default behaviour is e.preventDefault(.) on the synthetic event object.
. Attach 'capture' if you need to handle during capture phase (exapmle : onClickCapture)

LIBRARIES VS FRAMEWORKS AND THE REACT ECOSYSTEM:

Frameworks:

1. All in one kit
2. Frameworks include everything (HTTPrequests, Styling, Routing, Form management) all out of the box.
3. Ease of Mind: Everything you need to build a complete application is included in the framework ("batteries included").

Libraries:

1. React is only view library, rest feature like routing, styling HTTPrequests, form management should be impoerted from other libraries.
2. more freedom
3. decision fatigue.

3rd Party Library Ecosysytem:

1. Routing for SPA - React Router and React Location.
2. Http request - vjs fetch and axios
3. Remote state management - React Query, SWR and Apollo.
4. Global state management - context APi, Redux and Zustand.
5. Styling = css modules, styled components and tailwindcss.
6. form management - react hook form and formik
7. Animations/ transitions - Motion and react spring.
8. UI COmponent -Material UI, chakra and mantine.

FRAMEWORKS BUILT ON TOP OF REACT: (opiniated react frameworks)

1. NextJs
2. Remix
3. Gatsby

many frameworks specalises in some thing.
Most frameworks offloads setup process.

react frameworks offer many other features like - ssr, staic site generation, better developer experience (DX) etc.

Also known as Full stack react frameworks.

PRACTICAL TAKEAWAYS:
. A component is like a bluprint for a poece of UI that will eventually exist on the screen. When we "use" a component, React creates a component instance, which is like an actual physical manifestation of a component, containing props, state and more. A component instance, when rendered, will return react element.
. "rendering" only means calling component functions and calculating what DOM elements need to be inserted, deleted or updated. it has nothing to do with writing to the DOM. THerefore, each time a component instance is rendered and re-rendered, the function is called again.
. only the initial app render and state updates can cause a render, which happens for the entire application, not just one single component.
. When a component instance gets re-rendered , all its children will get re-rendererd as well. This doesn't mean that all children will get updated in the DOM, thanks to reconciliation, which checks which elements have actually changed between two renders. But all this re-rendering can still have an impact on performance (more on that later in the course).
. Diffing is how React decides which DOm elements need to be added or modified. if, between renders, a certain React element stays at the same position in the element tree, the corresponding DOm element and component state will stay the samw. if the element changed to a different position, or if it's a different type, the DOm element and state will be destroyed.
. Giving elements a key prop allows react to distinguish between multiple component instances. when a key stays the same across renders, the element is kept in the DOm. This is why we need to use keys in lists. When we change the key between renders, the DOm element will be destroyed and rebuilt. We use this as a trick to reset state.
.Never declare a new component inside another component! Doing so will re-create the nested component every time the parent compoenent re-renders. React will always see the nested component as new, and therefore reset its state each time the parent component is updated.
. the logic that produces JSX output for a component instance ("render logic") is not allowed to produce any side effects: np API calls, no timers, no object or variable mutations, no state updates. Side effects are allowed in event handlers and useEffect(next Section).
. The DOM is updated in the commit phase, but not by React, but by a "renderer" calledd ReactDOM. That's why we always needd to include both libraries in a React web app project. We can use other renderers to use React on different platforms, for example to build mobile or native apps.
. Multiple state updates inside an event handler function are batched, so they happen all at once, causing only one re-render. This means we can not access a state variable immediately after updating it: state updates are asynchronous. Since React 18, batching also happens in timeouts, promises, and native event handlers.
. When using event handlers, we get access to a synthetic event object, not the browse's native object, so that events work the same way across all browsers. The difference is that most synthetic events bubble, including focus, blur, and change, which do not bubble as native browser events. Only the scroll event does not bubble.
.React is a library, not a framework. This means that you can assemble your application using your favorite third-party libraries. The downside is that you need to find and learn all these additional libraries. No problem, as you will learn about the most commonly used libraries in the course.

12. EFFECTS AND DATA FETCHING:
    .Data fetching is essential
    .Effects with useEffect hook.
    .Effect CLeanup
    .Realworld Application.

COMPONENT LIFE CYCLE:
. Step1 - Mount/Initial Render --> component instance is rendered for the first time --> fresh state and props are created.
. Step-2 - It can be re-rendered for unlimited number of times --> when state changes --> when prop changes -- parent component re-renders --> context changes --> re-render phase is completely optional.
.step-3 - UnMount --> component instance is complettely destroyed and removed from the screen. --> state and props are destroyed --> we can define code to run at these specific points in time.

HOW NOT TO FETCH DATA ON REACT:
.we should update state in render logic.
. Omdb API is used for movies list.
. Omdb is the open version of imdb.
. Do Not use fetch function on the render logic. always..........
. Fetch functions runs infinite number of request if placed in the render logic.
. Fetch function really do not stop.
. This multiple re-rendering happens because the re-rendering takes place when the setMovies is set , when triggered fetches again and again...
. so do not use set state inside rendering logic.
. useEffect Hook is used for solving this infinite-re-rendering problem.

USE EFFECT TO THE RESCUE:
.useEffect hook is used for writing side effects like data fetching.
. useEffect code will be rendered after some renders.
. useEffect code will be executed after initial render.
. useEffect doesnot return anything
. useEffect runs the function within it , with a dependency array.

FIRST LOOK AT EFFECTS:
. Side Effect: a side effect is basically any "interaction between a react component and the world outside the component". we can slso think of a side as "code that actually does something". Examples: Data fetching, setting up subscriptions, setting up timers, manually accessing the DOM. etc.
. we need side effects all the time. They make our applications do something. Not in render logic.
. side effects can be made in two places 1. Event Handlers 2. UseEffect.
. some times event handlers is not enough for the application needs
. useEffect is created by rendering.
. Effects allows us to code that will run at different moments: mount, re-render and un-mount.
. Fetching movie data is clearly a side-effect.

. EV: Executed when the corresonding event happens.

Eff: Executed after the component mounts (initial render), and after subsequent re-renders (according to dependency array).
. clean up function inside the use effect cleans up before the component re-render and when unmounts.
. Thinking about synchronization , not lifecycles: Used to keep a component synchronized with some external system (in this example, with the API movive data).
. Eh is used for changes in UI.
. Eff is used for chanhes in external world.
. Event handlers are the preferrref way for causing side effects.
. Do not Overuse useEffect Hook.
.
