import {createStore} from 'redux';

const initialState = {
	count : 0
};

const CLICK = 'CLICK';

export const btnClick = () => ({type : CLICK})

const myStore = createStore((state = initialState, action) => {
	const newState = Object.assign({}, state);

	switch(action.type){
		case CLICK:
			newState.count += 1
			break

		default:
			return newState
	}
	return newState
});

export default myStore;