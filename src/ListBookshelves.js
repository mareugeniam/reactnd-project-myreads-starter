import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'

class ListBookshelves extends Component {
    static propTypes = {
        shelves: PropTypes.array.isRequired,
        books: PropTypes.array.isRequired,
        onUpdateBookShelf: PropTypes.func.isRequired
    }

    render() {
        const { shelves, books, onUpdateBookShelf } = this.props

        return (
            <div className="list-books-content">
                {shelves.map((shelf) => (
                    <div key={shelf.value}>                
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">{shelf.title}</h2>
                            <div className="bookshelf-books">
                                <ListBooks 
                                    books={books}
                                    shelf={shelf}
                                    shelves={shelves}
                                    onUpdateBookShelf={onUpdateBookShelf}
                                />
                            </div>
                        </div>
                    </div>
                ))}            
          </div>
        )
    }
}

export default ListBookshelves