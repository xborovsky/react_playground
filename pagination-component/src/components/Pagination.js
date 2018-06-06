import React from 'react';
import PaginationItem from './PaginationItem';
import PropTypes from 'prop-types';

const showPrevNext = (totalPages) => {
    return totalPages > 1;
};

const generatePages = (totalPages, currentPage, onChangePage) => {
    var items = [];
    for (var i=0; i<totalPages; i++) {
        const cnt = i;
        items.push(
            <PaginationItem key={i}
                            additionalClasses={(i === currentPage ? ' active' : '')}
                            label={i + 1}
                            onItemClick={() => onChangePage(cnt)} />);
    }
    return items;
};

const Pagination = ({pageNum, totalPages, onChangePage}) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {showPrevNext(totalPages) ?
                    <PaginationItem additionalClasses={(pageNum === 0 ? ' disabled' : '')}
                                    label={'Previous'}
                                    onItemClick={() => onChangePage(pageNum-1)} /> : null}
                {generatePages(totalPages, pageNum, onChangePage)}
                {showPrevNext(totalPages) ?
                    <PaginationItem additionalClasses={(pageNum === totalPages-1 ? ' disabled' : '')}
                                    label={'Next'}
                                    onItemClick={() => onChangePage(pageNum+1)} /> : null}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    pageNum : PropTypes.number,
    totalPages : PropTypes.number,
    onChangePage : PropTypes.func
};

export default Pagination;