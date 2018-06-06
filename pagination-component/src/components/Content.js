import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loadPageData } from '../service/data-loader.service';
import Loader from './Loader';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading : true,
            pageData : null
        };
    }

    componentDidMount() {
        loadPageData(this.props.pageNum).then((data) => {
            this.setState({
                loading : false,
                pageData: data
            });
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({loading : true});
        loadPageData(nextProps.pageNum).then((data) => {
            this.setState({
                loading : false,
                pageData: data
            });
        });
    }

    render() {
        return (
            <div>
                {this.state.loading ?
                    <Loader /> :
                    <div>
                        <span>{this.state.pageData}</span>
                    </div>
                }
            </div>
        );
    }
};

Content.propTypes = {
    pageNum : PropTypes.number
};

export default Content;