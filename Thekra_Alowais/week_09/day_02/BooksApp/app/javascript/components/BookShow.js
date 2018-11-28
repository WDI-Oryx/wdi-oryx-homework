import React from "react";
import BookInfor from "./BookInfo";
import SimilarBooks from "./SimilarBooks";
class BookShow extends React.Component {
  render() {
    // debugger;
    const bookname = this.props.match.params.bookname;
    console.log(bookname);
    return (
      <div>
        <BookInfor bookname={bookname} />
        <SimilarBooks bookname={bookname} />
      </div>
    );
  }
}

export default BookShow;
