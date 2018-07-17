import React, {Component} from 'react'

class CurrentlyReadingShelf extends Component {
  state={
    shelf: ''
  }

handleChange=(event) => {
    this.setState({shelf: event.target.value})
    if(this.state.shelf !== this.props){
    console.log("work");
      //onUpdateBook(books)
   }
  }


  render() {
    return(
                    <ol className="books-grid">
                      <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
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
                          <div className="book-title">To Kill a Mockingbird</div>
                          <div className="book-authors">Harper Lee</div>
                        </div>
                      </li>
                      <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' }}></div>
                            <div className="book-shelf-changer">
                              <select value={this.state.shelf} onChange={this.handleChange}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading" onChange={this.handleChange}>Currently Reading</option>
                                <option value="wantToRead" onChange={this.handleChange}>Want to Read</option>
                                <option value="read" onChange={this.handleChange}>Read</option>
                                <option value="none" onChange={this.handleChange}>None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">Ender's Game</div>
                          <div className="book-authors">Orson Scott Card</div>
                        </div>
                      </li>
                    </ol>
      )
  }
}

export default CurrentlyReadingShelf;
