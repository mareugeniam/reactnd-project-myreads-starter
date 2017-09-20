import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ListBookshelves from './ListBookshelves'

class Library extends Component {
    static propTypes = {
        shelves: PropTypes.array.isRequired,
        books: PropTypes.array.isRequired,
        onUpdateBookShelf: PropTypes.func.isRequired
    }

    render() {
        const { shelves, books, onUpdateBookShelf } = this.props

        return(
            <div className="list-books">            
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <ListBookshelves 
                shelves={shelves}
                books={books}
                onUpdateBookShelf={onUpdateBookShelf}
            />
            <div className="open-search">
                <Link
                    to='/search'
                    className='add-book'
                >Add a book</Link>
            </div>
          </div>
        )
    }
}

export default Library