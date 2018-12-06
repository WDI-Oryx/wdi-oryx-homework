import React from "react";

class Tweet extends React.Component {

  handleClickContent() {
    console.log(this.props.content, "was clicked");
  }

  handleDoubleClickAuthor() {
    console.log(this.props.author, "was double clicked");
  }

  handleRightClicked() {
    console.log(this.props.likes + " was right-clicked");
  }

  render() {
    return (
      <div>
        <p
          onClick={this.handleClickContent.bind(this)}
        >{this.props.content}</p>
        <p
          onDoubleClick={this.handleDoubleClickAuthor.bind(this)}
        >Written by: {this.props.author}</p>
        <p
          onContextMenu={this.handleRightClicked.bind(this)}
        >Likes: {this.props.likes}</p>
      </div>
    );
  }
}

export default Tweet;