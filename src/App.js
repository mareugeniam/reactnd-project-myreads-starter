import React from 'react'
import { Route } from 'react-router-dom'
import Library from './Library'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: [
      {title: 'Currently Reading', value: 'currentlyReading'},
      {title: 'Want to Read', value: 'wantToRead'},
      {title: 'Read', value: 'read'}
    ]
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateBookShelf(book,shelf){
    BooksAPI.update(book,shelf).then(() => this.componentDidMount())
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Library 
            shelves={this.state.shelves} 
            books={this.state.books}
            onUpdateBookShelf={(book,shelf) => {
              this.updateBookShelf(book,shelf)
            }}
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks
            books={this.state.books}
            shelves={this.state.shelves}
            onUpdateBookShelf={(book,shelf) => {
              this.updateBookShelf(book,shelf)
            }}
          />
        )}/>        
      </div>
    )
  }
}

export default BooksApp
