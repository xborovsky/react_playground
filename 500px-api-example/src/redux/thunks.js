import { searchPhotos } from '../api/api';
import { searchFinished, searchError } from './action-creators';

export default function thunkMiddleware(store) {
    return function(next) {
        return function(action) {
            if (typeof action === 'function') {
                return action(store.dispatch, store.getState);
            } else {
                return next(action);
            }
        };
    };
}

export const fetchData = (searchText, pageNum) => {
    return dispatch => {
        return searchPhotos(searchText, pageNum)
            .then(result => {
                dispatch(searchFinished((result && result.photos) ? result.photos : []));
            }).catch(error => {
                dispatch(searchError(error));
             })
    };
};