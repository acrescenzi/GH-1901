import React from 'react'
import ReactDOM from 'react-dom'
import store, {increment} from './store' // imported for you already
import {connect, Provider} from 'react-redux';

// const connect = (specifyStateIWant, specifyBehaviorIWant) => (SomeComponent) => {
//   return class ConnectedToStore extends React.Component {
//     constructor () {
//       super();
//       this.state = store.getState();
//     }

//     componentDidMount() {
//       this.functionToCallWhenWeWantToUnsubscribe = store.subscribe(() => {
//         this.setState(store.getState())
//       })
//     }

//     componentWillUnmount() {
//       this.functionToCallWhenWeWantToUnsubscribe();
//     }

//     render() {
//       const stateIWant = specifyStateIWant(this.state);
//       const behaviorIWant = specifyBehaviorIWant(store.dispatch);
//       return <SomeComponent {...stateIWant} {...behaviorIWant} />
//     }
//   }
// }

const specifyStateIWantForCounter = (state) => ({
  count: state.count
})
const specifyBehaviorIWantForCounter = (dispatch) => ({
  clickHandler: () => dispatch(increment())
})

const Counter = (props) => {
  const {count, clickHandler} = props;
  return (
    <div id='container'>
      <div id='counter'>
        <h1>{count}</h1>
        <button onClick={(clickHandler)}>Increment</button>
      </div>
    </div>
  )
}

const ConnectedCounterComponent = connect(specifyStateIWantForCounter, specifyBehaviorIWantForCounter)(Counter);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedCounterComponent />
  </Provider>,
  document.getElementById('app')
)
