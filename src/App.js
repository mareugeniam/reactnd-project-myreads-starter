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
      {title: 'Currently Reading', name: 'currentlyReading'},
      {title: 'Want to Read', name: 'wantToRead'},
      {title: 'Read', name: 'read'}
    ]
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Library shelves={this.state.shelves} books={this.state.books}/>
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks />
        )}/>        
      </div>
    )
  }
}

export default BooksApp
