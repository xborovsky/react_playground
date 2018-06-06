import React, { Component } from 'react';
import Pagination from './Pagination';
import Content from './Content';

class PaginatedContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page : 0
        };
    }

    handlePageChange = (pageNum) => {
        this.setState({page : pageNum});
    }

    render() {
        const {page} = this.state;

        return (
            <div>
                <Content pageNum={page} />
                <Pagination pageNum={page} totalPages={10} onChangePage={(pageNum) => this.handlePageChange(pageNum)} />
            </div>
        );
    }
}

export default PaginatedContent;