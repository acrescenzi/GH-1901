import {createStore} from 'redux';

/* ACTION TYPES */
const DEPOSIT = 'deposit';
const WITHDRAW = 'withdraw';

/* ACTION CREATORS */
export const deposit = amount => ({type: DEPOSIT, amount});
export const withdraw = amount => ({type: WITHDRAW, amount});

const reducer = (state = {balance: 0}, action) => {
  switch (action.type) {
    case DEPOSIT:
      return {balance: state.balance + action.amount};
    case WITHDRAW:
      return {balance: state.balance - action.amount};
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
