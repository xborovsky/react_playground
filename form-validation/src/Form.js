import React, { Component } from 'react';
import FormErrors from './FormErrors';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : '',
            formValid : false,
            formErrors : {
                email : '',
                password : ''
            },
            emailValid : false,
            passwordValid : false
        };
    }

    handleInput(e) {
        const name = e.target.name;
        const val = e.target.value;
        this.setState(
            {[name] : val},
            () => { this.validateField(name, val) }
        );
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            default:
                break;
        }

        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
            }, this.validateForm
        );
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
     }

    render() {
        return (
            <form>
                <div className="panel panel-default">
                    <FormErrors errors={this.state.formErrors} />
                </div>

                <h2>Sign up</h2>
                <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" name="email"
                        value={this.state.email} onChange={(e) => this.handleInput(e)} />
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password"
                        value={this.state.password} onChange={(e) => this.handleInput(e)} />
                </div>
                <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>
                    Sign up
                </button>
            </form>
        );
    }
};

export default Form;