import React from "react"
class Github extends React.Component {
  constructor(props) {
    super();
    this.state = { userData: null };

    const baseURL = "https://api.github.com";
    const path = `/users/Halima95`;
    const apiKey = "4170e79aa13a875f5a1324c946c76a80b648966a";
    const params = `?access_token=${apiKey}`;
    const url = baseURL + path + params;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          userData: data
        });
      });
  }
  render() {
    if (this.state.userData === null) {
      return <h2>Loading</h2>;
    }
    const { avatar_url, bio, followers, following } = this.state.userData;
    return (
      <div>
        <img src={avatar_url} />
        
        <p> Bio: {bio}</p>
        <p> Followers: {followers}</p>
        <p> Following: {following}</p>
      </div>
    );
  }
}

export default Github

