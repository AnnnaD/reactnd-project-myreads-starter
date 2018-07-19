import React, {Component} from 'react'

class Shelves extends Component {
    state={
    shelf: ''
  }

handleChange=(event,book,shelf) => {
    this.setState({shelf: event.target.value})
    if(this.state.shelf!==this.props.name){
      console.log("work")
      //this.onUpdateBook(book,shelf)
   }
 }

render() {
  console.log(this.props.books)
  return (
          <ol className="books-grid">
          {this.props.books.map(book=>book.shelf===this.props.name &&(
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url({book.cover})`}}></div>
                  <div className="book-shelf-changer">
                    <select value={this.state.shelf} onChange={this.handleChange}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
          ))}
        </ol>
        )
      }
}

export default Shelves;
