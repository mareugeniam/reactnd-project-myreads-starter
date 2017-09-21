import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ListBookshelves from './ListBookshelves'

const Library = (shelves, books, onUpdateBookShelf) => {

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

Library.propTypes = {
    shelves: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired
}

export default Library;