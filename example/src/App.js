import React, { Component } from 'react'

import Pagination from 'react-bootstrap-pagination-logic'

export default class App extends Component {

  handlePageChange = (page) => {
    console.log(page)
  }

  render () {
    return (
      <div className="container p-5">
        <Pagination current_page={10} last_page={20} position="center" handlePageChange={this.handlePageChange} />
      </div>
    )
  }
}
