import { INCREMENT,DECREMENT } from '../Action/action'

const initialState = {
    counter: 0,
};


const reducer = (state = initialState,action) => {
    if(action.type === 'INCREMENT()'){
    return {counter:state.counter + action};
    } else if (action.type === 'DECREMENT()' && state.counter > 0){
    return {counter:state.counter - 1};
    }
    return state;
};


export default reducer;