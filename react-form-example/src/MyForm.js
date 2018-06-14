import React, { Component } from 'react';
import { Form, Text, TextArea, Radio, RadioGroup, Select, Checkbox } from 'react-form';
import validator from 'validator';

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submittedValues : null
        };
    }

    render() {
        const statusOptions = [
            {
              label: 'Single',
              value: 'single',
            },
            {
              label: 'In a Relationship',
              value: 'relationship',
            },
            {
              label: "It's Complicated",
              value: 'complicated',
            },
          ];
          const validateFirstName = firstName => !firstName || validator.isEmpty(firstName) ? 'FirstName is a required field' : null,
                validateLastName = lastName => !lastName || validator.isEmpty(lastName) ? 'LastName is a required field' : null;

        return (
            <Form onSubmit={submittedValues => this.setState({ submittedValues })}>
                {formApi => (
                    <form onSubmit={formApi.submitForm}>
                        <p>{JSON.stringify(formApi.errors)}</p>
                        <div className="form-group">
                            <label htmlFor="firstName">First name</label>
                            <Text field="firstName" id="firstName" validate={validateFirstName}
                                  className={`form-control ${formApi.errors && formApi.errors.firstName && 'is-invalid'}`} />
                            {formApi.errors && formApi.errors.firstName ?
                                <div className="invalid-feedback">
                                    {formApi.errors.firstName}
                                </div> : null
                            }
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last name</label>
                            <Text field="lastName" id="lastName" validate={validateLastName}
                                  className={`form-control ${formApi.errors && formApi.errors.lastName && 'is-invalid'}`} />
                            {formApi.errors && formApi.errors.lastName ?
                                <div className="invalid-feedback">
                                    {formApi.errors.lastName}
                                </div> : null
                            }
                        </div>
                        <div className="form-group">
                            <RadioGroup field="gender">
                                <div className="form-check form-check-inline">
                                    <Radio value="male" id="male" className="form-check-input" />
                                    <label htmlFor="male" className="form-check-label">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <Radio value="female" id="female" className="form-check-input" />
                                    <label htmlFor="female" className="form-check-label">Female</label>
                                </div>
                            </RadioGroup>
                        </div>
                        <div className="form-group">
                            <label htmlFor="bio">Bio</label>
                            <TextArea field="bio" id="bio" className="form-control" />
                        </div>
                        <div className="form-group">
                            <div className="form-check form-check-inline">
                                <Checkbox field="authorize" id="authorize" className="form-check-input" />
                                <label htmlFor="authorize" className="form-check-label">Authorize</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="status">Relationship status</label>
                            <Select field="status" id="status" options={statusOptions} className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                )}
            </Form>
        );
    }
}

export default MyForm;