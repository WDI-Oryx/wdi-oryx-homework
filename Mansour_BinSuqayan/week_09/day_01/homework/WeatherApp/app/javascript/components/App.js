import React from "react"
import Search from "./Search";
import Show from "./Show";
class App extends React.Component {
  constructor(){
    super();
    this.state = { data: null };
    this.search = this.search.bind(this);
  }
  search(city){
    var that = this;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=71630e28647a33dc7d2372658d7bc8c3`)
    .then(r => r.json())
    .then(function(data){
      that.setState({
        data: data
      });
   
    });
  
  }
  render () {
    
    let showResult = null;

    if(this.state.data){
      showResult = <Show weather = {this.state.data}/>
    }


    return (
      <div>
        <h1> the Weather</h1>
        <Search appSearch={this.search}/>
        {showResult}
      </div>


    );
  }
}

export default App
