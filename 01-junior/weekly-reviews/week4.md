# Testing Basics

## Why write tests?

- Reliability: Ensures code is working as intended
- Refactorability: Ensure code WILL CONTINUE to work after someone changes it
- Documentation: Documents what the code actually does.
- Accuracy: Precision/Accuracy/certainty of behavior. eg. Checking for odd edge cases (0, negative numbers, null values, etc)
 - Doesn’t mean there are no bugs, just that the code behaves correctly in the tested cases

## What are the main components of a test spec?

```js
//  ┌─ Describe block contains groups and subgroups of specs
//  │  Can be nested arbitrarily deep
//  │
//  │       ┌─ Descriptive label of entity to be tested
//  │       │
//  │       │          ┌─ Function to nest further describes or its
describe('myFunction', () => {

// ┌─ It block constitutes a single spec
// │
// │      ┌─ Descriptive label of one thing that should happen
// │      │
// │      │                          ┌─ function for testing that it actually happens
// │      │                          │
  it('should return a given value', () => {

    // ┌─ Assertion throws error if expected condition is not met, failing the test
    expect(myFunction()).to.equal(givenValue)
  })
})
```

## What should I test for?

Generally, you want to test for anything that you would want to know if your app stopped doing. In other words, whatever is important to the application. Often, you'll work on one specific feature at a time, which lends itself well to writing tests.

Examples:
  - Does my sorting function return a sorted array?
  - Does my route respond 404 to this request?
  - Does my react component show this message?

**Test for behavior, not implementation.** Remember our black box principle. You want to test that for a given set of inputs, you receive the desired output. Your tests should not care how your function (or route or component) arrives at the result. Implementation details change all the time, and you don't want to have to rewrite your tests every time you change an implementation detail.

## Describe the process of test-driven development

1. Write a failing test. It should describe the desired behavior of your component, and it should initially fail because you haven't implemented this behavior yet. If it passes before you've implemented the behavior, it's probably a worthless test.
2. Write the code to make the test pass.
3. Refactor the implementation as necessary
4. Repeat

# Async Testing

## What is the issue presented by asynchronicity in tests?

Consider the following code:

```js
describe('fs.readFile', () => {
  it('reads file contents', () => {
    fs.readFile('file1.txt', (err, data) => {
      if (err) throw err;
      expect(data.toString()).to.equal('Hello!');
    });
  });
});
```

The `it` function is synchronous. If we reach the end of it without throwing an error, the test passes. But the callback passed to `fs.readFile` is asynchronous and will therefore never run before the `it` function completes.

This test will *always* pass.

## What are two ways to handle async in tests?

The older, pre-promises style uses a `done` callback to tell mocha that the test is async, and should not be considered complete until the callback is invoked

```js
//                          ┌─ Callback!
it('reads file contents', (done) => {
  fs.readFile('file1.txt', (err, data) => {

    // calling done with an error will fail the test
    if (err) return done(err)

    // If the assertion throws, the test will fail as usual
    expect(data.toString()).to.equal('Hello')

    // calling done with no arguments signifies we're done and all is well
    done()
  })
})
```

You can also simply return a promise from your test, and mocha (or jasmine) will know that this is an async test and treat it appropriately

```js

describe('promisifiedReadFile', () => {
  it('reads file contents',  () => {
    return readFileAsync('file1.txt') // returning the promise
    .then(txt => expect(data.toString()).to.equal('Hello!'))
  });
})

// OR you can simply declare your `it` callback as async. Remember, all async functions return promises

describe('promisifiedReadFile', function() {
  it('reads file contents', async function() {
    const data = await readFileAsync('file1.txt')
    expect(data.toString()).to.equal('Hello!');
  });
});

```

**!! Notice that there is no try...catch block!** If expect throws, catch would capture - and mostly likely resolve - that error.  This is not what we want. Leave it, mocha will handle it!

# Testing Side Effects

## Why are non-pure functions harder to test than pure functions?

You need to set up external dependencies, such as files to be read, network responses, or randomized input on order to reliably test output.

## What are test spies?

Spies are wrapped functions that can record metadata about the use of a function, for instance:

- Whether the function was called
- How many times it was called
- The arguments it was called with
- and more!

They are useful for testing callback behavior, among other things.

## What are stubs?

Stubs are like spies, but instead of simply reporting on a function's usage, they replace the function entirely, returning a known value.

They are useful for replacing external requests (such as AJAX or DB Queries) or for testing functions that are dependent on the output of another function, such as Math.random()

---

# React Router

## What is the purpose of the react-router-dom library?

The react-router-dom library is the routing library used for React web applications. It keeps the UI in sync with the URL, meaning that it uses the URL in the browser to determine what kind of presentation a visitor should receive without reloading the browser.

## What are the main components we import from react-router-dom?

* Router - HashRouter (adds a # after the root URL and preferable to use when you don’t have a server or server only responds to static files) or BrowserRouter (does not add a # and preferable to use when you have a server that will be able to handle any possible URL); the Router component should be the parent component of an application because when the URL changes, the Router component’s state will update, which initiates a render; therefore, when the route changes, all parts of an application should be given a change to update

* Route = Path + Component
`<Route path=‘/somePath’ component={SomeComponent} />` : if the path starts with `/somePath`, then the `SomeComponent` will render; if we want an exact matching of the path, then we add the `exact` prop to the `Route` component

* Link
`<Link to=‘/somePath’>Link to SomePath</Link>` : coupled with the Route example above, when a user clicks on the Link to SomePath, the URL bar will change to /somePath, which will then cause the `SomeComponent` to render

## What props are passed down by the Route component to the rendered component?

* match - contains information about how the route’s path matches the current URL; most notably, it includes a params key that parses the URL parameters

* history - used to manipulate the browser’s history programmatically using properties on the history object, such as history.push; the history prop can be used when you don’t want to use a Link and instead want to perform some sort of JavaScript before router user to another page

* location - contains information about where the url is now


## How do we pass additional props to the component being rendered by the Route component?

```
<Route path='/puppies' component={Puppies} />

vs.

<Route path='/puppies' render={(routeProps) => <Puppies {...routeProps} />} />
```
* the  `routeProps` in the above example are match, history, and location; if we do not need those props in the rendered component, we can omit them

---

# React Forms

## What is the difference between a controlled and an uncontrolled form component?

A controlled component has a value prop which is directly set (controlled) by application state. Changes to the value on state will update what you see on the form.

Uncontrolled components do not have a value prop tied to application state. Updates to state will NOT be reflected in the form component.

## What is the difference between application state and local state?

Application state is data that may be needed by multiple parts of your application. For instance, the logged-in user. This data should be managed high up on the state tree, where it can be passed down to wherever it may be needed.

Local state is data that is only needed by a particular component, such as ephemeral data input into a form. The rest of the application usually doesn't need to know what the user is typing into a form until the form is submitted. This state does not need to be shared with other components, and can therefore be isolated to just the form component
