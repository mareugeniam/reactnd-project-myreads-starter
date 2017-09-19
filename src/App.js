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
      {title: 'Move to...', value: 'none', show: false},
      {title: 'Currently Reading', value: 'currentlyReading', show: true},
      {title: 'Want to Read', value: 'wantToRead', show: true},
      {title: 'Read', value: 'read', show: true},
      {title: 'None', value: 'none', show: false}
    ]
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateBookShelf(book,shelf){
    BooksAPI.update(book,shelf).then(this.componentDidMount)
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Library shelves={this.state.shelves} books={this.state.books}/>
        )}/>
        <Route path='/search' render={({ history }) => (
          <SearchBooks />
        )}/>        
      </div>
    )
  }
}

export default BooksApp
