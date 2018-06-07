import React from 'react';
import { incrementCounter, decrementCounter, resetCounter } from '../redux/action-creators';
import { connect } from 'react-redux';

const Counter = ({counter, incrementCounter, decrementCounter, resetCounter}) => (
    <div>
        <h1>{counter}</h1>
        <button type="button" onClick={() => incrementCounter()}>Increment</button>
        <button type="button" onClick={() => decrementCounter()}>Decrement</button>
        <button type="button" onClick={() => resetCounter()}>Reset</button>
    </div>
);

const mapStateToProps = state => ({
    counter: state.counter
});

const mapDispatchToProps = dispatch => ({
    incrementCounter: () => dispatch(incrementCounter()),
    decrementCounter: () => dispatch(decrementCounter()),
    resetCounter: () => dispatch(resetCounter())
});

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default ConnectedCounter;