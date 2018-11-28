import React from "react"
class UserRepositories extends React.Component {
  constructor(props){
    super();
    this.state = { userRepos: null };

    const baseURL = "https://api.github.com";
    const path = `/users/${props.username}`;
    const apiKey = "b2102ac58f993c726fc51fb8ed994f9571e19d03";
    const params =`/repos?access_token=${apiKey}`;
    const url = baseURL + path + params;
    var that = this;


    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({userRepos: data}));

    }
  render () {
    if (this.state.userRepos === null){
      return <h2>Loading...</h2>;
    }
    const ListItems = this.state.userRepos.map(repo =>{
      return (
        <li>
          <a href={repo.html_url}>{repo.full_name}</a>
        </li>
      )
    });
    return (
      <div>
        <h2>All {this.props.username}'s Repos</h2>
        <ul>{ListItems}
        </ul>
      </div>

    );
  }
}

export default UserRepositories
