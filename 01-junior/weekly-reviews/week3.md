# Event Emitters

## What's the difference between a blocking and a non-blocking callback

Blocking callbacks execute synchronously, while non-blocking callbacks are queued to be run on a subsequent turn of the event loop, allowing your synchronous code to continue executing.

## What is an event emitter?

An event emitter is a code pattern of deferring certain functions to execute only in response to certain “events”

## What are the advantages of using the event emitter pattern?

It's possible to decouple unrelated modules of an application. One module can simply emit a series of events, and any other modules that are interested in these events can register their own callbacks, without the first module having to be aware.

It's also a great way to represent multiple asynchronous events on an individual entity, such as error/progress/complete events on a file upload.


# Promise Mechanics

## What are the advantages of promises over older-style callbacks?

Promises look and behave more similarly to synchronous code and execute in the order written. They also have unified error handling (try/catch) rather than needing handle potential errors in each individual callback.

## What are the two key properties of a promise?

* Status: pending/fulfilled/rejected
* Value: either the fulfilled value or a relevant error if rejected

## What state does the promise start in? To which state(s) can it transition?

A promise starts in the `pending` state and will transition exactly once to *either* `fulfilled` or `rejected`

## How do you create a new promise?

The Promise global!

```javascript
const myPromise = new Promise((resolve, reject) => {
  trySomethingAsynchronous((err, rslt) => {
    if (err) reject(err)
    else resolve(rslt)
  })
})
```

## What does an async function return?

A Promise!

## What are some methods for getting around the inability to use `await` at the top level?

You can wrap the awaited code in an async IIFE (Immediately Invoked Function Expression)

```javascript
( async () => {
  await aThing()
  await anotherThing()
})() // <-- note invocation here!

```

## How can you await multiple processes and have them execute in parallel?

`Promise.all` is a utility method on the Promise global which takes an array of promises and returns a single promise which either resolves when all promises have resolved, or rejects when any of them rejects. The returned promise resolves with an array of resolved values from the individual promises, preserving their order.

# Promise Structure

## What is the `.then` method? What does it return?

`.then` registers a function to be called when a promise is fulfilled. It returns a promise for the value of whatever is returned from the passed-in function.

## What is the `.catch` method?

`.catch` registers a handler function for a promise that rejects. It also returns a promise for the value returned from the handler function.

## What happens if you return a promise from the handler passed to `.then`?

It is assimilated (flattened) and `.then` returns a promise for that promise's value

## What happens if an error is thrown in a `.then` handler?

The error is bubbled down the first registered handler (usually the .catch)


# Single Page Applications

## What is a single page application?
A single page application (SPA) is a website that fits on a single web page with goal or providing a more fluid and interactive user experience. With SPAs, a single view is loaded and then JavaScript is used to manipulate the DOM as the user interacts with the page. Instead of the server sending page new HTML pages each time a user clicks on a link, an AJAX request is made to fetch new data from the server, which is then used to update what the user sees on the page via DOM manipulation. 

## What is the difference between making a network request via AJAX vs. making a request via the URL bar?
One way to make a request to the server is to update the URL bar, which makes a request to the server and will be handled by a route, which will send back a response. An AJAX request does not require the URL bar to be updated. An AJAX request is a background HTTP request using JavaScript and no page refresh is necessary. 

## How do you use the fetch API to make AJAX requests?
[Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
```
 const response = await fetch(‘/route’)
 const data = await response.json()
```

## What is are the differences between ES6 modules and CommonJS?
CommonJS influenced the module system used by node, and it uses `require` and `module.exports`. ES6 modules use a different set of keywords:

fileA
```
export thing1
export thing2
export default thing3
```

fileB
```
import {thing1, thing2} from ‘./fileA’
import thing3 from ‘/.fileB’
```

## When would you use ES6 modules?
* Browser-side JavaScript: use import/export and use webpack to compile your code; a module bundler, like webpack, interprets and loads a module written in ES6 module format and generates a bundle of all the code at build time.
* Node: continue to use require and module.exports; however, you can use ES6 modules in Node only if you have a transpiler like Babel to transpile the code to an ES5 module format that is supposed by Node. 

# React

## What is JSX?

JSX adds an `<html>`-like syntactical extention to javascript.

Files using JSX MUST be processed into true javascript before execution.

```js
<div className="nice-block">Yes!</div>
```

Compiles down to:
```js
React.createElement("div", { className: "nice-block"}, "Yes!");
```

Inside JSX, javascript expressions may be embedded, enclosed in the curly ones: `{}`

```js
const color = "red";
<div>The apple is {red}</div>
```

All the regular html and svg tags are available in JSX. Additionally, custom elements can be specified.

These are differentiated by their casing, `<NavigationBar/>`. Custom elements must be defined, and correspond to either a class with a `render` method or a render function. Either must return more <JSX/>.

## What is the difference between a `function` component and a `class` component?
The key difference is that a `class` component has:

* an internal state object and method to update state
* lifecycle hooks

In a class component, props are accessed via `this.props`. Function components recieve props as an argument.


## What are the basic parts of the react component lifecycle?
There are more lifecycle hooks that we will cover in the following weeks. But these will serve you well for now.

There are three main phases of a component life cycle:


* First render/mounting
  * In the first render, the `constructor` method is invoked.
  * Then the `render` method is invoked.
  * Then the component is mounted into the DOM.
  * Then the `componentDidMount` lifecycle method is invoked
  
* Updating state/props after first render
  * `render` method is invoked
  * new JSX is compared to previous render output
  * DOM is brought into sync with the component
  
* Component is removed
  * the `componentWillUnmount` lifecycle hook is invoked
  * DOM node is removed

## What is the difference between props and state?

Props are passed through component to component and represented in JSX as html attributes.

State is internal to a component. It is common for state in one component to be passed down as props to another component.
