import React from "react"
import Github from "./Github";
import Repositories from "./Repositories";

class UserShow extends React.Component {
  render() {
    return (
      <div>
        <h2>Halima Alshahrani </h2>
        <Github username="Halima95" />
        <Repositories username="Halima95" />
      </div>
    );
  }
}

export default UserShow;