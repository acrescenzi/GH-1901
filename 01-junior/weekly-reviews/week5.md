# Sockets / Socket.io

## What does it mean to say a socket is full-duplex?

Messages can be sent from either side of the connection at any time. This is similar to a telephone. Compare this to a half-duplex walkie-talkie, where only one person can talk at a time.

## How does an http connection get re-used for a websocket?

The request includes headers:

```
Connection: Upgrade
Protocols: websocket
```

If the server supports websockets it responds with a special status code: `101 Switching Protocols` and a header:

```
Protocol: websocket
```

From then on, the client and server will keep that connection alive and use it to send websocket data frames.

## How does socket.io differ from plain websockets?

Socket.io introduces the concept of sending named events between client and server. Raw web sockets only send raw data. Socket.io is built on top of websockets by specifyng it's own format for those messages.

---

# Redux

## What are the main principles of Redux as a state management library?

* **Single Source of Truth** - You know exactly where all of your state is stored.
* **Data is Read-Only** - You can query the state of your app at any time. However, *changing* that state takes some work
* **Changes are requested through actions and are made with pure functions** - By making state changes with pure, synchronous functions, we have an auditable history of changes to our state. Makes things MUCH easier to reason about and debug

## How do you request to the store that it make a change to the state of your application?

You dispatch an action.

## Cool. What's an action?

I'm glad you asked. An action, at its simplest, is just an object with a `type` property. It may also have additional properties that are necessary for describing the desired change to the store's state. For instance, an action to deposit $10 into a bank account might look like this:

```js
{
  type: DEPOSIT,    // <-- required `type` property
  account: 4567789, // <-- additional properties as
  amount: 10.00     //     necessary to describe desired change
}
```

## What's a reducer?

A reducer is a **pure function**, which takes as its arguments an action and the existing state object, and returns a **new** state object.

## What happens when an action is dispatched?

When an action is dispatched, it is passed along with the current state object to the reducer. The reducer determines and returns the new state, which is replaced within the store. At this point, any callbacks that have been registered with `store.subscribe` are run.

# Action Types and Creators

## What's an action type? Why do we use them?

Action types are defined constants which name the actions that can be dispatched through a Redux store. For instance, instead of

```js
store.dispatch({ type: 'deposit' })
```

we would instead first define a `DEPOSIT` constant:

```js
const DEPOSIT = 'deposit'
store.dispatch({ type: DEPOSIT })
```

This ensures that if you mistype a constant when dispatching an action, you will see an obvious error pointing you toward your misspelling. Whereas if you simply passed a mistyped string as the type in your action, the action would silently fail to do anything in your reducer, as its type wouldn't match on any known types. This is a maddening kind of bug to try to track down.

## What's an Action Creator?

An action creator is a function that returns an action object. It can take as its arguments anything required to describe the action. For instance:

```js

// define our action type
const DEPOSIT = 'deposit'

// Action creator returns action object
const deposit = (account, amount) => ({ type: DEPOSIT, account, amount })

```

# Redux Middleware

## What's Redux Middleware? Why use it?

Middleware is a function that is executed on an action after it is dispatched, but before it reaches the reducer. It provides and extension point for Redux, and is useful for logging, crash reporting, talking to external APIs, etc.

## What form does middleware take?

Middleware is basically a curried function. It receives the store as its argument, returning a function that takes a `next` callback as its argument. *That* function returns *another* function which takes the action as its argument. At some point, the middleware must call `next(action)` to pass control onto the next registered middleware function, or on to the reducer.

```js
const someMiddleware = store => next => action => {
  // do something with or to the action...
  next(action) // then pass it on.
}
```

Or, without arrow functions:

```js
const someMiddleware = function(store) {
  return function(next) {
    return function (action) {
      // do something with or to the action...
      next(action) // then pass it on.
    }
  }
}
```

## How do you apply it?

You can import the `applyMiddleware` function from Redux, and pass it as the second argument to `createStore`

```js
import { createStore, applyMiddleware } from 'redux'
import someMiddleware from 'some-library'
import anotherMiddleware from 'another-library'

//... do some other stuff to set up your store and reducer...

const store = createStore(reducer, applyMiddleware(someMiddleware, anotherMiddleware))

```
