import React from 'react'
import './App.css';
import Book from "./Book";
//import escapeRegExp from 'escape-string-regexp'
//import sortBy from 'sort-by'

class Read extends React.Component {

  render() {
    const {books, updateBook, query, updateQuery} = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
           {books
              .filter(book=>book.shelf==="read")
              .map(book => (
                 <Book key={book.id} book={book} updateBook={updateBook} query={query} updateQuery={updateQuery} />
       ))}
    </ol>
   </div>
  </div>
  );
 }
}


export default Read;
