import React, {Component } from 'react';
import FormInput from '../common/FormInput';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addRecipe } from '../../redux/action-creators';
import uuidv4 from 'uuid';

class CreateRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formConfig : {
                recipeName : {
                    type : 'text',
                    id : 'recipeName',
                    label : 'Recipe name',
                    placeholder : 'Enter recipe name',
                    validations : {
                        required : true
                    },
                    value : '',
                    valid : false,
                    touched : false,
                    invalidMsg : 'Recipe name is required.'
                },
                ingredients : {
                    type : 'textArea',
                    id : 'ingredients',
                    label : 'Ingredients (comma-separated)',
                    placeholder : 'Enter ingredients',
                    rows : 3,
                    validations : {
                        required : true,
                        minItems : 2
                    },
                    value : '',
                    valid : false,
                    touched : false,
                    invalidMsg : 'At least 2 ingredients are required.'
                },
                directions : {
                    type : 'textArea',
                    id : 'directions',
                    label : 'Directions',
                    placeholder : 'Enter directions',
                    rows : 5,
                    value : '',
                    valid : true,
                    touched : false
                }
            }
        };
    }

    isFormValid = () => {
        for (var key in this.state.formConfig) {
            if (!this.state.formConfig[key].valid) {
                return false;
            }
        }
        return true;
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { addRecipe } = this.props;
        const { formConfig } = this.state;

        if (this.isFormValid()) {
            addRecipe({
                id : uuidv4(),
                name : formConfig.recipeName.value,
                ingredients : formConfig.ingredients.value.split(','),
                directions : formConfig.directions.value
            });

            this.props.history.push('/');
        }
    };

    handleFormInputChange = (e) => {
        const formConfig = this.state.formConfig,
              field = formConfig[e.target.id],
              value = e.target.value;

        field.value = value;
        field.touched = true;

        if (!field.hasOwnProperty('validations')) {
            field.valid = true;
        } else {
            const validations = field.validations;
            let valid = true;

            if (validations.required) {
                valid = value && value.length && valid;
            }
            if (validations.minItems) {
                const commaIdx = value.indexOf(',');
                valid = value && value.length && commaIdx > 0 && (commaIdx < value.length - 1) && valid;
            }
            field.valid = valid;
        }
        this.setState({field});
    };

    render() {
        let formConfigArray = Object.keys(this.state.formConfig).map((item) => this.state.formConfig[item]);

        return (
            <div className="container">
                <h1>Create new recipe</h1>
                <form onSubmit={this.handleSubmit}>
                    {
                        formConfigArray.map(item =>
                            <FormInput type={item.type} id={item.id}
                                       placeholder={item.placeholder}
                                       label={item.label} rows={item.rows}
                                       onChange={(e) => this.handleFormInputChange(e)}
                                       value={item.value}
                                       key={item.id}
                                       invalidMsg={(item.touched && !item.valid) ? item.invalidMsg : null} />
                        )
                    }
                    <button type="submit" className="btn btn-primary" disabled={!this.isFormValid()}>Create</button>
                </form>
            </div>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addRecipe : (recipe) => dispatch(addRecipe(recipe))
    };
};

export default connect(null, mapDispatchToProps)(withRouter(CreateRecipe));