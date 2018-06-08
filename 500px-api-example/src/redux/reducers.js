import constants from './constants';

const initialState = {
    loading : false,
    error : null,
    data : [],
    searchText : '',
    loadMoreVisible : false,
    pageNum : 1
};

const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.SEARCH:
            return {...state, loading : true, error : null, searchText : action.searchText, data : [], loadMoreVisible : false, pageNum : 1};
        case constants.SEARCH_NEXT:
            console.log(action.pageNum);
            return {...state, loading : true, error : null, loadMoreVisible : false, pageNum : action.pageNum};
        case constants.SEARCH_FINISHED:
            console.log('search finished');
            var nextData = [...state.data, ...action.data];
            return {...state, loading : false, error : null, data : nextData, loadMoreVisible : (action.data && action.data.length)};
        case constants.SEARCH_ERROR:
            return {...state, loading : false, error : action.error};
        default:
            return state;
    }
};

export default searchReducer;