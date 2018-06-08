import React from 'react';
import { connect } from 'react-redux';
import { searchNext } from '../redux/action-creators';

const SearchResults = ({loading, error, data, loadMoreVisible, curentPageNum, onLoadNext, searchNext}) => {
    const loadNext = (pageNum) => {
        searchNext(pageNum);
        onLoadNext(pageNum);
    };

    return (
        <div className="container">
            {error ?
                <div className="alert alert-danger" role="alert">
                    <strong>Oh snap!</strong> Could not load data from 500px!<br />
                    { error }
                </div> : null}
            <div className="row">
                {data ?
                    data.map((item, cnt) => {
                        return (
                            <div className="col-md-3 image-item" key={`PhotoItem_${item.id}_${cnt}`}>
                                <a href={`https://500px.com${item.url}`} target="_blank"><img alt="ImageAlt" src={item.image_url} /></a>
                            </div>
                        );
                    }) : null
                }
                <div className="clearfix" />
            </div>
            {loading ?
                <i className="fa fa-spinner fa-spin"></i> : null
            }

            {loadMoreVisible ?
                <button type="button" className="btn btn-primary" onClick={() => loadNext(curentPageNum + 1)}>Load more...</button> : null
            }
        </div>
    );
};

const mapStateToProps = state => ({
    loading : state.loading,
    error : state.error,
    data : state.data,
    loadMoreVisible : state.loadMoreVisible,
    curentPageNum : state.pageNum
});

const mapDispatchToProps = dispatch => ({
    searchNext : (pageNum) => dispatch(searchNext(pageNum))
});

const ConnectedSearchResults = connect(mapStateToProps, mapDispatchToProps)(SearchResults);

export default ConnectedSearchResults;