import React from 'react'
import './App.css';
import Book from "./Book";

class WantRead extends React.Component {

  render() {
    const {books, updateBook } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
      {}
           {books
              .filter(book=>book.shelf==="wantToRead")
              .map(book=> (
                 <Book key={book.id} book={book} updateBook={updateBook} />
       ))}
    </ol>
   </div>
  </div>
  );
 }
}


export default WantRead;
