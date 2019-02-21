import { createStore } from 'redux'

// ACTION TYPES
const INCREMENT_TIMES = "INCREMENT_TIMES"

// ACTION CREATORS
export const incrementTimes = (amount = 1) => ({
  type: INCREMENT_TIMES,
  amount
})

// INITIAL STATE FOR REDUCER
const initialState = {
  times: 0
}

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_TIMES: {
      return {
        // ...state,
        times: state.times + action.amount
      }
    }
    default: {
      return state
    }
  }
}

// STORE
const store = createStore(reducer)

// EXPORT
export default store