import React, { Component } from 'react';
import FormErrors from '../common/FormErrors';
import { addBook } from '../../service/book-service';
import { isValidISBN } from '../../service/validator';

class CreateBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookName : '',
            author : '',
            isbn : '',
            formErrors : {
                bookName : '',
                author : '',
                isbn : ''
            },
            bookNameValid : false,
            authorValid : false,
            isbnValid : false,
            formValid : false,
            formTouched : false
        };
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name] : value,
            formTouched : true
        }, () => this.validateField(name, value));
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let bookNameValid = this.state.bookNameValid;
        let authorValid = this.state.authorValid;
        let isbnValid = this.state.isbnValid;

        switch(fieldName) {
            case 'bookName':
                bookNameValid = value.length > 0;
                fieldValidationErrors.bookName = bookNameValid ? '' : 'is invalid';
                break;
            case 'author' :
                authorValid = value.length > 0;
                fieldValidationErrors.author = authorValid ? '' : 'is invalid';
                break;
            case 'isbn':
                isbnValid = value.length > 0 && isValidISBN(value);
                fieldValidationErrors.isbn = isbnValid ? '' : 'is invalid';
            default : break;
        }

        this.setState({
            formErrors : fieldValidationErrors,
            bookNameValid, authorValid, isbnValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({
            formValid : this.state.bookNameValid && this.state.authorValid
        });
    }

    createBook(evt) {
        evt.preventDefault();
        addBook({
            name : this.state.bookName,
            author : this.state.author
        });
        this.props.history.push('/');
    }

    render() {
        return (
            <form onSubmit={(evt) => this.createBook(evt)}>
                {this.state.formTouched && !this.state.formValid ? <FormErrors errors={this.state.formErrors} /> : ''}

                <div className="form-group row justify-content-lg-center">
                    <label htmlFor="bookName" className="col-sm-2 col-form-label">Book name</label>
                    <div className="col-sm-10 col-lg-5">
                        <input type="text" id="bookName" name="bookName" className="form-control" autoFocus
                            value={this.state.bookName} onChange={(e) => this.handleUserInput(e)} />
                    </div>
                </div>
                <div className="form-group row justify-content-lg-center">
                    <label htmlFor="author" className="col-sm-2 col-form-label">Author</label>
                    <div className="col-sm-10 col-lg-5">
                        <input type="text" id="author" name="author" className="form-control"
                            value={this.state.author} onChange={(e) => this.handleUserInput(e)} />
                    </div>
                </div>
                <div className="form-group row justify-content-lg-center">
                    <label htmlFor="isbn" className="col-sm-2 col-form-label">ISBN</label>
                    <div className="col-sm-10 col-lg-5">
                        <input type="text" id="isbn" name="isbn" className="form-control"
                            value={this.state.isbn} onChange={(e) => this.handleUserInput(e)} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Add book</button>
            </form>
        );
    }
}

export default CreateBook;