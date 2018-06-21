import React, { Component } from 'react';
import InputWrapper from './InputWrapper';
import InfoMessage from './InfoMessage';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formConfig : {
                name : {
                    type : 'text',
                    name : 'name',
                    id : 'name',
                    label : 'Name',
                    placeholder : 'Type your name...',
                    className : 'form-control',
                    value : '',
                    validations : {
                        required : true,
                        minLength : 3,
                        maxLength : 10
                    },
                    valid : false
                },
                password : {
                    type : 'password',
                    name : 'password',
                    id : 'password',
                    label : 'Password',
                    placeholder : 'Type your password...',
                    className : 'form-control',
                    value : '',
                    validations : {
                        required : true,
                        minLength : 5
                    },
                    valid : false
                },
                email : {
                    type : 'email',
                    name : 'email',
                    id : 'email',
                    label : 'Email',
                    placeholder : 'Type your email...',
                    className : 'form-control',
                    value : '',
                    validations : {
                        regex : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    },
                    valid : true
                },
                description : {
                    type : 'textarea',
                    name : 'description',
                    id : 'description',
                    label : 'Description',
                    placeholder : 'Type your description...',
                    className : 'form-control',
                    value : '',
                    valid : true
                },
                personChbx : {
                    type : 'checkbox',
                    name : 'personChbx',
                    id : 'personChbx',
                    label : 'Are you a person?',
                    className : 'form-check-input',
                    checked : false,
                    valid : true
                },
                formValid : false
            }
        };
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
    };

    allValid = () => {
        for (var rootField in this.state.formConfig) {
            const rootObj = this.state.formConfig[rootField];
            if (rootObj.hasOwnProperty("valid") && !rootObj.valid) {
                return false;
            }
        }
        return true;
    };

    allRequiredFieldsAreFilled = () => {
        for (var rootField in this.state.formConfig) {
            const rootObj = this.state.formConfig[rootField];
            if (rootObj.hasOwnProperty('validations')) {
                const validations = rootObj.validations;
                if (validations.hasOwnProperty('required') && (rootObj.hasOwnProperty('value') && !rootObj.value.length)) {
                    return false;
                }
            }
        }
        return true;
    };

    updateFieldValue = (field, target) => {
        const fieldConfig = this.state.formConfig[field];

        if (fieldConfig.type === 'checkbox') {
            fieldConfig.checked = target.checked;
        } else {
            fieldConfig.value = target.value;
        }

        this.setState({fieldConfig});
    };

    validateField = (field, value) => {
        const fieldConfig = this.state.formConfig[field];
        if (!fieldConfig.validations) {
            return true;
        }

        let valid = true;
        if (fieldConfig.validations.required) {
            valid = value && value.length && valid;
        }
        if (fieldConfig.validations.minLength) {
            valid = value && value.length >= fieldConfig.validations.minLength && valid;
        }
        if (fieldConfig.validations.maxLength) {
            valid = value && value.length <= fieldConfig.validations.maxLength && valid;
        }
        if (fieldConfig.validations.regex) {
            valid = (!value || (value && fieldConfig.validations.regex.test(value))) && valid;
        }

        fieldConfig.valid = valid;
        this.setState({fieldConfig});

        const formConfig = this.state.formConfig;
        formConfig.formValid = this.allValid();
        this.setState({formConfig});

        return valid;
    };

    renderInfoMessage = () => {
        if (this.allRequiredFieldsAreFilled()) {
            if (!this.state.formConfig.formValid) {
                return (
                    <InfoMessage type="danger">
                        Form contains error, can not be submitted!
                    </InfoMessage>
                );
            } else {
                return (
                    <InfoMessage type="success">
                        Form filled and validated successfully and is ready to submit.
                    </InfoMessage>
                );
            }
        } else {
            return (
                <InfoMessage type="info">
                    Please fill in the form.
                </InfoMessage>
            );
        }
    };

    render() {
        let formConfigArray = Object.keys(this.state.formConfig).map((k) => this.state.formConfig[k])

        return (
            <form onSubmit={this.handleSubmit}>
                {this.renderInfoMessage()}
                {formConfigArray.map(formConfig =>
                    formConfig === Object(formConfig) ?
                    <InputWrapper key={formConfig.id} inputProps={{
                        type : formConfig.type,
                        name : formConfig.name,
                        id : formConfig.id,
                        label : formConfig.label,
                        placeholder : formConfig.placeholder,
                        className : formConfig.className,
                        value : formConfig.value,
                        checked : formConfig.checked,
                        onChange : (e) => {
                            this.updateFieldValue(formConfig.name, e.target);
                            this.validateField(formConfig.name, e.target.value);
                        }
                    }} labelAfterInput={formConfig.type === 'checkbox'} /> : null
                )}
                <button type="submit" className="btn btn-primary" disabled={!this.state.formConfig.formValid}>Submit</button>
            </form>
        );
    }
}

export default Form;