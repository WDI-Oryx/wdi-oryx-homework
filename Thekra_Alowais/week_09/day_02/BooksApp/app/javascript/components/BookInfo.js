import React from "react";
class BookInfo extends React.Component {
  constructor(props) {
    super();
    this.state = { bookData: null };
    const path = `?q=${props.bookname}`;
    const apiKey = "AIzaSyABhmiCHQ-Uga-oQEl925ESbfbnt8YCuSI";
    const url = `https://www.googleapis.com/books/v1/volumes${path}&key=${apiKey}`;

    // console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        this.setState({
          bookData: data
        });
        // console.log(this.state.bookData.items[0].volumeInfo);
      });
  }
  render() {
    // console.log(this.props.bookname);
    if (this.state.bookData === null) {
      return <h1>Loading</h1>;
    }

    const {
      title,
      publishedDate,
      description
    } = this.state.bookData.items[0].volumeInfo;

    return (
      <div>
        <h2>Search result of {this.props.bookname} book</h2>

        <p>Book title: {title}</p>
        <p>published date: {publishedDate}</p>
        <p>Book description: {description}</p>
      </div>
    );
  }
}

export default BookInfo;
