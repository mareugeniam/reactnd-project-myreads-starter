import React from 'react'
import PropTypes from 'prop-types'

const Book = (book, books, shelves, onUpdateBookShelf, onUpdateBooksOnShelfChange) => {

    return(
        <li key={book.id}>
            <div className="book">
            <div className="book-top">
                <div className="book-cover">
                    {book.imageLinks !== undefined && (
                        <img alt={book.title} src={book.imageLinks.smallThumbnail} />
                    )}
                </div>
                <div className="book-shelf-changer">
                <select 
                    value={book.shelf} 
                    onChange={(event) => {
                        books && onUpdateBooksOnShelfChange(book,event);
                        onUpdateBookShelf(book,event.target.value);
                    }}
                >
                    <option disabled>Move to...</option>
                    {shelves.map((shelf) => (
                            <option key={shelf.value} value={shelf.value}>{shelf.title}</option>
                    ))}
                    <option value="none">None</option>
                </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
            </div>
        </li>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired,
    onUpdateBooksOnShelfChange: PropTypes.func.isRequired
}

export default Book;