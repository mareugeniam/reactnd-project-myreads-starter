import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        shelf: PropTypes.string   
    }    

    render(){
        const { books, shelf } = this.props

        let filterBooks
        if (shelf) {
            filterBooks = books.filter((book) => book.shelf === shelf)
        } else {
            filterBooks = books
        }

        return(
            <ol className="books-grid">
                {filterBooks.map((book) => (
                    <li key={book.id}>
                    <div className="book">
                    <div className="book-top">
                        <div className="book-cover">
                            <img alt={book.title} src={book.imageLinks.smallThumbnail} />
                        </div>
                        <div className="book-shelf-changer">
                        <select>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
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