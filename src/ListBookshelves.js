import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'

class ListBookshelves extends Component {
    static propTypes = {
        shelves: PropTypes.array.isRequired,
        books: PropTypes.array.isRequired
    }

    render() {
        const { shelves, books } = this.props

        return (
            <div className="list-books-content">
                {shelves.map((shelf) => (
                    <div key={shelf.name}>                
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">{shelf.title}</h2>
                            <div className="bookshelf-books">
                                <ListBooks books={books} shelf={shelf.name}/>
                            </div>
                        </div>
                    </div>
                ))}            
          </div>
        )
    }
}

export default ListBookshelves