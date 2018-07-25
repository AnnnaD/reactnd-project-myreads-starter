import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Read from './Read'
import WantRead from './WantRead'
import CurrentlyReading from './CurrentlyReading'
import escapeRegExp from 'escape-string-regexp'
//import sortBy from 'sort-by'

class BooksApp extends React.Component {
  state = {
    books:[],
    query:'',
    searchedBooks:[],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

componentDidMount(){
  BooksAPI.getAll().then((books) => {
  this.setState({books})
 })
}

updateBook = (book, shelf) => {
	BooksAPI.update(book, shelf);
  	const newBooks = this.state.books;
  	for (var i = 0; i < newBooks.length; i++) {
      if (book.id === newBooks[i].id) {
        newBooks[i].shelf = shelf
      }
    }
	this.setState({
      books: newBooks
  	})
}

updateQuery = (query) => {
  this.setState({ query:query.trim() })
  let searchedBooks;
  if(this.state.query){
   searchedBooks=this.state.books;
    const match = new RegExp(escapeRegExp(this.state.query),'i')
    searchedBooks=this.state.books.filter((book)=>match.test(book.title))
  }else{
    console.log("doesn't work")
  }
}


  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event)=>this.updateQuery(event.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Read books={this.state.books} updateBook={this.updateBook} query={this.state.query} updateQuery={this.updateQuery}/>
                <WantRead books={this.state.books} updateBook={this.updateBook}/>
                <CurrentlyReading books={this.state.books} updateBook={this.updateBook}/>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}

      </div>
    )
  }
}

export default BooksApp
