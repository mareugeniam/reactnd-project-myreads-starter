import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        shelves: PropTypes.array.isRequired,
        onUpdateBookShelf: PropTypes.func.isRequired
    }

    state = {
        query: '',
        searchedBooks: []
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() });
        this.onSearch();
    }

    onSearch(){
        if (this.state.query) {
            BooksAPI.search(this.state.query,20).then((searchedBooks) => {
                const searchedBooksUpdated = searchedBooks.map(b => {
                    let bookFound = this.props.books.find(myBook => myBook.id === b.id);
                    b.shelf = bookFound ? bookFound.shelf : 'none';
                    return b;
                });

                this.setState({ searchedBooks: searchedBooksUpdated });
            });                   
        }
    }

    render() {
        const { query, searchedBooks } = this.state
        const { onUpdateBookShelf, shelves } = this.props

        let showingBooks = query ? searchedBooks : [];

        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link 
                className='close-search'
                to='/'
              >Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                    type="text" 
                    placeholder="Search by title or author"
                    value={query}
                    onChange={(event) => this.updateQuery(event.target.value)}/>                               
              </div>
            </div>
            <div className="search-books-results">
                {showingBooks.length > 0 && (
                    <ListBooks 
                        shelves={shelves}
                        books={showingBooks}
                        onUpdateBookShelf={onUpdateBookShelf}
                    />
                )} 
            </div>
          </div>
        )
    }
}

export default SearchBooks