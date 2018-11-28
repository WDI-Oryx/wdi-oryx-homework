import React from "react"
import Search from "./Search"
class App extends React.Component {
  constructor(){
    super();
    
    this.state = {data: null};
  }
  search(term){
    fetch("http://www.omdbapi.com/?apikey=f02c628a&t=jaws")
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
    //Make an AJAX Request to the OMDB API
    // When the data comes back, change the state of the app
    // The app will re-render because of that
    console.log(term);
  }
  render () {
    return (
      <div>
     <h1>Welcome to the Movie App</h1>
     <Search appSearch={this.search}/>
     </div>
    );
  }
}

export default App
