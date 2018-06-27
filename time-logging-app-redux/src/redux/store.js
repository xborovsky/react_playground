import { createStore } from 'redux';
import timerReducers from './reducers';
import { loadState, saveState } from './local-storage';

const persistedState = loadState();
const store = createStore(timerReducers, persistedState);

store.subscribe(() => {
    saveState({
        timers : store.getState().timers
    });
});

export default store;