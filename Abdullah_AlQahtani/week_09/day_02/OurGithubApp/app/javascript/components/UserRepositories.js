import React from "react";

class UserRepositories extends React.Component {
  constructor(props) {
    super();
    this.state = { userRepos: null };
    const baseURL = "https://api.github.com";
    const path = `/users/${props.username}/repos`;
    const apiKey = "09ff7eb9f6f78a3f366de4d14d674527b5e93d3c";
    const params = `?access_token=${apiKey}`;
    const url = baseURL + path + params;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          userRepos: data
        });
      });
  }
  render() {
    if (this.state.userRepos === null) {
      return <h2>Loading...</h2>;
    }
    const listItems = this.state.userRepos.map(repo => {
      return (
        <li key={repo.id}>
          <a href={repo.html_url}>{repo.full_name}</a>
        </li>
      );
    });
    return (
      <div>
        <h2>All {this.props.username}'s Repos</h2>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default UserRepositories;