import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        shelf: PropTypes.object,
        shelves: PropTypes.array.isRequired,
        onUpdateBookShelf: PropTypes.func.isRequired
    }

    render(){
        const { books, shelf, shelves, onUpdateBookShelf } = this.props

        let filterBooks = shelf ? books.filter((book) => book.shelf === shelf.value) : books;

        return(
            <ol className="books-grid">
                {filterBooks.map((book) => (
                    <li key={book.id}>
                    <div className="book">
                    <div className="book-top">
                        <div className="book-cover">
                            {book.imageLinks !== undefined && (
                                <img alt={book.title} src={book.imageLinks.smallThumbnail} />
                            )}
                        </div>
                        <div className="book-shelf-changer">
                        <select value={book.shelf} onChange={(event) => onUpdateBookShelf(book,event.target.value)}>
                            <option disabled>Move to...</option>
                            {shelves.map((shelf) => (
                                    <option key={shelf.value} value={shelf.value}>{shelf.title}</option>
                            ))}
                            <option value="none">None</option>
                        </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                    </div>
                </li>
                ))}
            </ol>
        )
    }
}

export default ListBooks