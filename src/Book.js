import React from 'react'
import PropTypes from 'prop-types'

const Book = (props) => {

    return(
        <li>
            <div className="book">
            <div className="book-top">
                <div className="book-cover">
                    {props.book.imageLinks !== undefined && (
                        <img alt={props.book.title} src={props.book.imageLinks.smallThumbnail} />
                    )}
                </div>
                <div className="book-shelf-changer">
                <select 
                    value={props.book.shelf} 
                    onChange={(event) => {
                        props.books && props.onUpdateBooksOnShelfChange(props.book,event);
                        props.onUpdateBookShelf(props.book,event.target.value);
                    }}
                >
                    <option disabled>Move to...</option>
                    {props.shelves.map((shelf) => (
                            <option key={shelf.value} value={shelf.value}>{shelf.title}</option>
                    ))}
                    <option value="none">None</option>
                </select>
                </div>
            </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors">{props.book.authors && props.book.authors.join(', ')}</div>
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