import React from 'react';

const SearchForm = ({label, placeholder, onChange, onSubmit}) => 
    <form onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor={label}>{label}</label>
            <input type="text" 
                    id={label}
                    className="form-control"
                    placeholder={placeholder}
                    onChange={onChange} />
            <button type="submit"
                    className="btn btn-success">Search</button>
        </div>
    </form>
;

export default SearchForm;