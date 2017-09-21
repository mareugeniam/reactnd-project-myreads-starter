import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Library from './components/Library'
import SearchBooks from './components/SearchBooks'
import NotFound from './components/NotFound'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    });
  }

  updateBookShelf(book, shelf) {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id).concat(book)
      }));
    });
  }

  render() {
    const { books } = this.state;
    const shelves = [
      {title: 'Currently Reading', value: 'currentlyReading'},
      {title: 'Want to Read', value: 'wantToRead'},
      {title: 'Read', value: 'read'}
    ];

    return (
      
      <div className="app">
        <Switch>
          <Route exact path='/' render={() =>
            <Library 
              shelves={shelves}
              books={books}
              onUpdateBookShelf={(book,shelf) => 
              this.updateBookShelf(book,shelf)}
            />
          }/>
          <Route path='/search' render={() => (
            <SearchBooks
              books={books}
              shelves={shelves}
              onUpdateBookShelf={(book,shelf) => {
                book.shelf !== shelf &&
                this.updateBookShelf(book,shelf)
              }}
            />
          )}/>
          <Route component={NotFound}/>
        </Switch>       
      </div>
    )
  }
}

export default BooksApp;
