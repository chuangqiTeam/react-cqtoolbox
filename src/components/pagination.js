import React, {Component} from 'react';
import Pagination from '../../components/pagination';
import Section from '../../components/section';

class PaginationTest extends Component {
  state = {
    page: 1,
    total: 10,
  }

  handlePageClick = (page) => {
    this.setState({ page });
  }

  render() {
    return (
      <Section title="分页">
        <Pagination
            currentPage={this.state.page}
            totalPages={this.state.total}
            onChange={this.handlePageClick}/>
      </Section>
    );
  }
}

export default PaginationTest;
