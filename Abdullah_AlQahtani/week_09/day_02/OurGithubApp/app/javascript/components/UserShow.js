import React from "react"
import UserProfile from "./UserProfile";
import UserRepositories from "./UserRepositories";

class UserShow extends React.Component {
  render() {
    const username = this.props.match.params.username;
    console.log(username);
    return (
      <div>
       <h2>{username}</h2>
        <p>Here is my profile page</p>
        <UserProfile username={username} />
        <UserRepositories username={username} />
      </div>
    );
  }
}

export default UserShow;