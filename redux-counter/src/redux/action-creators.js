import constants from './constants';

export const incrementCounter = () => (
    {
        type : constants.INCREMENT,
        val : 1
    }
);

export const decrementCounter = () => (
    {
        type : constants.DECREMENT,
        val : 1
    }
);

export const resetCounter = () => (
    {
        type : constants.RESET
    }
);