import constants from './constants';

const initialState = {
    counter : 0
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.INCREMENT:
            return {
                counter : state.counter + action.val
            };
        case constants.DECREMENT:
            return {
                counter : state.counter - action.val
            };
        case constants.RESET:
            return {
                counter : 0
            };
        default:
            return state;
    }
};

export default counterReducer;