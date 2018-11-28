import React from "react"
class UserProfile extends React.Component {

  constructor(props){
    super();
    this.state = { userData: null };

    const baseURL = "https://api.github.com";
    const path = `/users/${props.username}`;
    const apiKey = "b2102ac58f993c726fc51fb8ed994f9571e19d03";
    const params =`?access_token=${apiKey}`;
    const url = baseURL + path + params;
    var that = this;


    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({userData: data}));

    }
    
  render () {
    console.log(this.state.userData);
    if(this.state.userData === null){
      return <h2>Loading...</h2>
    }
    const {name,avatar_url,bio,followers,following}   = this.state.userData;
    return (
      <div>
        <h2>Name : {name}</h2>
        <img src= {avatar_url}/>
        <p>BIO : {bio}</p>
        <p>FOLLOWER COUNT : {followers}</p>
        <p>FOLLOWING COUNT : {following}</p>
      </div>

    );
  }
}

export default UserProfile
