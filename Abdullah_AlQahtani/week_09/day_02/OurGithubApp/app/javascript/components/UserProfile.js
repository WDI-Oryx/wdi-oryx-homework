import React from "react"

class UserProfile extends React.Component {
  constructor(props) {
    super();
    this.state = { userData: null };
    

    const baseURL = "http://api.github.com";
    const path = `/users/${props.username}`;
    const apiKey = "09ff7eb9f6f78a3f366de4d14d674527b5e93d3c";
    const params = `?access_token=${apiKey}`;
    const url = baseURL + path + params;
    fetch(url)
    .then(r => r.json())
    .then(data => this.setState({ userData: data }));
  }
  render() {
    if(this.state.userData === null) {
      return <h2>Loading</h2>
    } 
    const avatar_url = this.state.userData.avatar_url;
    const followers = this.state.userData.followers;
    const following = this.state.userData.following;
    console.log(this.state);
    return (
      <div>
        <h2>{this.props.username}</h2>
        <img src={avatar_url} width="150px" height="150px"></img>
        <p>Bio: {this.state.userData.bio}</p>
        <p>FOLLOWER COUNT : {followers} </p>
        <p>FOLLOWING COUNT : {following} </p>
      </div>
    );
  }
}

export default UserProfile