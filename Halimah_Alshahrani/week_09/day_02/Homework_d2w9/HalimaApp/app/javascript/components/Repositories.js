import React from "react";

class Repositories extends React.Component {
  constructor(props) {
    super();
    this.state = { userRepos: null };
    const baseURL = "https://api.github.com";
    const path = `/users/${props.username}/repos`;
    const apiKey = "4170e79aa13a875f5a1324c946c76a80b648966a";
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
        <h2>All Halima's Repos</h2>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default Repositories;