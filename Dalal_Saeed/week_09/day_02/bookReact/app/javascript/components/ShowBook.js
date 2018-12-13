import React from "react"

class ShowBook extends React.Component {

  constructor(props) {
    super();
    this.state = { book: null };
    const base_url = "https://www.googleapis.com"; https://www.googleapis.com/books/v1/mylibrary/bookshelves/shelf/volumes
    const path = `/books/v1/volumes/${volumeId}`;
    const apiKey = "22";
    //const params = `?access_token=${apiKey}`;
    const url = base_url + path ;
    console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          book: data
        });
      });
  }
  render() {
    if (this.state.book=== null) {
      return <h2>Loading</h2>;
    }
    const { title, authors, publisher, description } = this.state.book;
    return (
      <div>
        <img src={title} />
        <h2>{this.props.booktitle}</h2>
        <p>{publisher}</p>
        <p>{description}</p>
        <p>{authors}</p>
      </div>
    );
  }
}


export default ShowBook
