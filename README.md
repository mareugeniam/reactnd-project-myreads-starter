# MyReads

MyReads is a small book library where you can search some books and add them to 3 different bookshelves categories: “currently reading”, “want to read”, or “read”.

## Getting Started

* clone or download the repository from [https://github.com/mareugeniam/reactnd-project-myreads-starter.git]

## Prerequisites

```
Node.js
```

## Installing

* install all project dependencies with `npm install`

## Running project

* start the server with `npm start`

## Built With

* Node.js
* ReactJS
* PropTypes
* React-Router

## Project files
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use within the app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon
│   └── index.html
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── Book.js # Class that contains a book structure.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # It is used for DOM rendering only.
    └── Library.js # Class that contains the Library structure. A library consists of bookshelves with lists of books in each one. The library itself has a title and each bookshelf has a title too.
    └── ListBooks.js # Class that contains the structure to show a list of books as a grid and its logic.
    └── ListBookshelves.js # Class that contains the bookshelves structure. A ListBookshelves consist of a list of bookshelves. Each bookshelf consists of a title and a list of books.
    └── NotFound.js # Class that represents every inexistent page. 404 error class.
    └── SearchBooks.js # Class that contains the logic for the search page.
```