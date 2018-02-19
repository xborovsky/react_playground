import React from 'react';

import Sort from './Sort';
import { sortBy } from 'lodash';

const SORTS = {
    NONE: list => list,
    TITLE: list => sortBy(list, 'title'),
    AUTHOR: list => sortBy(list, 'author'),
    COMMENTS: list => sortBy(list, 'num_comments').reverse(),
    POINTS: list => sortBy(list, 'points').reverse(),
  };

const Table = ({list, sortKey, onSort}) => {
    console.log(sortKey, onSort);
    return (
        <div className="table">
            <div className="table-header">
                <span style={{ width: '40%' }}>
                    <Sort sortKey={'TITLE'} onSort={onSort}>Title</Sort>
                </span>
                <span style={{ width: '30%' }}>
                    <Sort sortKey={'AUTHOR'} onSort={onSort}>Author</Sort>
                </span>
                <span style={{ width: '15%' }}>
                    <Sort sortKey={'COMMENTS'} onSort={onSort}>Comments</Sort>
                </span>
                <span style={{ width: '15%' }}>
                    <Sort sortKey={'POINTS'} onSort={onSort}>Points</Sort>
                </span>
            </div>
            {SORTS[sortKey](list).map((item) =>
                <div key={item.objectID} className="table-row">
                    <span style={{ width: '40%' }}>
                        <a href={item.url}>{item.title}</a>
                    </span>
                    <span style={{ width: '30%' }}>
                        {item.author}
                    </span>
                    <span style={{ width: '15%' }}>
                        {item.num_comments}
                    </span>
                    <span style={{ width: '15%' }}>
                        {item.points}
                    </span>
                </div>
            )}
        </div>
)};

export default Table;