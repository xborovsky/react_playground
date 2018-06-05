import React from 'react';

const BookListEntry = ({cnt, book, onDelete}) =>
    <tr>
        <td>{cnt+1}</td>
        <td>{book.name}</td>
        <td>{book.author}</td>
        <td>{book.isbn}</td>
        <td><a onClick={onDelete} className="deleteIcon">X</a></td>
    </tr>
;

export default BookListEntry;