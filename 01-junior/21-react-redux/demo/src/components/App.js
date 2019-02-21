import React, { Component } from 'react'
import store, { incrementTimes } from '../store'

import { connect } from 'react-redux'

const App = (props) =>  (
  <div>
    <h1>Hello World!</h1>
    <button
      onClick={ props.incrementTimesFromComponent }>Click Me!</button>
    <button
      onClick={ props.decrementTimesFromComponent }>Don't Click Me!</button>
    <p>You've clicked the button { props.times } times </p>
  </div>
)
  

// state here is just store.getState(), but for FREEEE
const constructPropsForComponentFromState = (state) => ({
  // kristin: "JAZZ HANDS"
  times: state.times
})

// dispatch is just store.dispatch
const utilizeDispatchFromWithinProps = (dispatch) => ({
  // justine: "EMBARGO"
  incrementTimesFromComponent: () => dispatch(incrementTimes()),
  decrementTimesFromComponent: () => dispatch(incrementTimes(-1))
})

const connectWithMyOptions = connect(
  constructPropsForComponentFromState,
  utilizeDispatchFromWithinProps
)
const connectedApp = connectWithMyOptions(App)

export default connectedApp