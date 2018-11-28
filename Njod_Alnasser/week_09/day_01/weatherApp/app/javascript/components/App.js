 import React from "react";
    import Search from "./WeatherSearch";
    import WeatherShow from "./WeatherDisplay";
    class App extends React.Component {
    constructor() {
      super();
      this.state = { data: null };
      this.search = this.search.bind(this);
    }
    search(term) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${term}&APPID=04f1151b53bf76083ed4104125740154`)
        .then(r => r.json())
        .then(data => {
          this.setState({
            data: data
          });
        });
    }
    render() {
    
      if (this.state.data === null) {
    
        return (
          <div>
            <h1>Welcome to the Weather App</h1>
            <Search appSearch={this.search} />
            <h3>Loading...</h3>
          </div>
        );
      }
      return (
    
        <div>
          <h1>Welcome to the Weather App</h1>
          <Search appSearch={this.search} />
    
          <WeatherShow weather={this.state.data.main.temp} country={this.state.data.sys.country}/>
        </div>
      );
    }
    }
    
    export default App;
    