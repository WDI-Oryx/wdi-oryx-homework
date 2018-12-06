import React from "react";
class SimilarBooks extends React.Component {
  constructor(props) {
    super();
    this.state = { similarBooks: null };
    const path = `?q=${props.bookname}`;
    const apiKey = "AIzaSyABhmiCHQ-Uga-oQEl925ESbfbnt8YCuSI";
    const url = `https://www.googleapis.com/books/v1/volumes${path}&key=${apiKey}`;

    // console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        this.setState({ similarBooks: data });
      });
  }
  render() {
    if (this.state.similarBooks === null) {
      return <h1>Loading</h1>;
    }
    const bookList = this.state.similarBooks.items.map(book => {
      // console.log(book);
      return (
        <li>
          <a href={book.volumeInfo.previewLink}>{book.volumeInfo.title}</a>
        </li>
      );
    });
    return (
      <div>
        <h3>Similar Books</h3>
        <ul>{bookList}</ul>
      </div>
    );
  }
}

export default SimilarBooks;
