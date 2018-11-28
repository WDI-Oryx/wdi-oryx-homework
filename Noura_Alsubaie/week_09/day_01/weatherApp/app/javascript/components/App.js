import React from "react";
import Search from "./Search";
import Result from "./Result";


class App extends React.Component {
  constructor(){
    super();
    this.state = {data: null};
    this.search= this.search.bind(this);
  }
  search(term){
    this.setState({ data: "Loading" });
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${term}&APPID=a115c6a9e3e30e54507360905eca3c1d`)
      .then(response => response.json())
      .then(data => {
          this.setState({data: data}); 
        });
  }
  render () {
    let result = null;
      if (this.state.data === null) {
          result = <h3>Is it cold ? </h3>;
    } else if (this.state.data === "Loading") {
        result = <h3>Loading...</h3>;
    } else {
        const temp = this.state.data.main.temp
        const city = this.state.data.name
        const humidity = this.state.data.main.humidity
        const country = this.state.data.sys.country
        // console.log(humidity, city, temp, country)
        result = <Result temp={temp} city={city} humidity={humidity} country={country} />;
    }
    return (
      <div>
          <h1> How is the weather today</h1>
          <Search appSearch={this.search}/>
          {result}
      </div>
    );
  }
}

export default App

