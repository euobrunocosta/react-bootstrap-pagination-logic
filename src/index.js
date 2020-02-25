import React, { Component } from 'react'

export default class Pagination extends Component {
  
  pagination = (current, last, handlePageChange) => {

    let delta = 2,
        left = current - delta,
        right = current + delta + 1,
        range = [],
        rangeWithDots = [],
        l;
  
    range.push(1)  
    for (let i = current - delta; i <= current + delta; i++) {
        if (i >= left && i < right && i < last && i > 1) {
            range.push(i);
        }
    }  
    range.push(last);

    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(i);
        l = i;
    }
    
    const pages = []
    for (let i = 0; i < rangeWithDots.length; i++) {
      pages.push(
        <li key={i} className={"page-item " + (rangeWithDots[i] === current ? "active" : (rangeWithDots[i] === "..." ? "disabled" : ""))}>
          <span onClick={() => { handlePageChange(rangeWithDots[i]) }} style={{cursor: 'pointer'}} className="page-link">{ rangeWithDots[i] }</span>
        </li>
      )
    }
    return pages
  }

  position = (position = "left") => {
    switch (position) {
      case 'center': return 'justify-content-center'
      case 'right': return 'justify-content-end'
      default: return ''
    }
  }

  render() {

    const { current_page, last_page, position, handlePageChange } = this.props

    return (
      <nav aria-label="Page navigation example">
        <ul className={"pagination " + this.position(position)}>
          {this.pagination(current_page, last_page, handlePageChange)}
        </ul>
      </nav>
    )

  }
}
