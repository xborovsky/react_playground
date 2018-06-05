import React, {Component} from 'react';
import BookListEntry from './BookListEntry';
import { getAllBooks, deleteBook } from  '../../service/book-service';

export class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books : []
        };
    }

    componentDidMount() {
        this.setState({
            books : getAllBooks()
        });
    }

    deleteBook(id) {
        if (window.confirm('Do you really want to delete the selected book?')) {
            deleteBook(id);
            this.setState({
                books : getAllBooks()
            });
        }
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>Book name</th>
                        <th>Author</th>
                        <th>ISBN</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.books.length > 0 ?
                        this.state.books.map((book, cnt) => {
                            return <BookListEntry key={cnt} cnt={cnt} book={book} onDelete={(id) => this.deleteBook(id)} />;
                        }) :
                        <tr>
                            <td colSpan={3}>No books...</td>
                        </tr>
                    }
                </tbody>
            </table>
        );
    }
}

export default BookList;