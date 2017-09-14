import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListBookshelves from './ListBookshelves'

class Library extends Component {
    static propTypes = {
        shelves: PropTypes.array.isRequired,
        books: PropTypes.array.isRequired
    }

    render() {
        const { shelves, books } = this.props

        return(
            <div className="list-books">            
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <ListBookshelves shelves={shelves} books={books}/>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )
    }
}

export default Library