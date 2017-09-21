import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class ListBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        shelf: PropTypes.object,
        shelves: PropTypes.array.isRequired,
        onUpdateBookShelf: PropTypes.func.isRequired
    }

    state = {
        books: null
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            books: nextProps.books
        })
    }

    updateBooksOnShelfChange(book,event){
        let newShelf = event.target.value;
        this.setState(currentState => {
            let mb = currentState.books.find(b => b.id === book.id);
            mb.shelf = newShelf;
            return currentState;
        });
    }

    render(){
        const { shelf, shelves, onUpdateBookShelf } = this.props;          
        const books = this.state.books || this.props.books;
        
        let filterBooks = shelf ? books.filter((book) => book.shelf === shelf.value) : books;

        return(
            <ol className="books-grid">
                {filterBooks.map((book) => (
                    <Book
                        key={book.id}
                        book={book}
                        books={books}
                        shelves={shelves}
                        onUpdateBookShelf={onUpdateBookShelf}
                        onUpdateBooksOnShelfChange={(book,event) => 
                        this.updateBooksOnShelfChange(book,event)}
                    />
                ))}
            </ol>
        )
    }
}

export default ListBooks;