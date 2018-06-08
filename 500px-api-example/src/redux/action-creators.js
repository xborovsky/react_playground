import constants from './constants';

export const searchFinished = (data) => ({
    type : constants.SEARCH_FINISHED,
    data : data
});

export const searchStarted = (text) => ({
    type : constants.SEARCH,
    value : text
});

export const searchNext = (pageNum) => ({
    type : constants.SEARCH_NEXT,
    pageNum : pageNum
});

export const searchError = (error) => ({
    type : constants.SEARCH_ERROR,
    error : error
});