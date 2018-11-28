import React from "react"
import Find from "./Find"
import Result from "./Result"
class App extends React.Component {
  constructor(){
    super();
    this.state = {data: null};
    this.lookingFor = this.lookingFor.bind(this);
  }

  lookingFor(item){
    var that = this;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${item}&APPID=b9c86570a893bcdd7be45ca96619b488`)
    .then(response => response.json())
    .then(function (data) {
      that.setState({
        data: data
      });
      console.log(data);
      // console.log(this.state.data);
    });
  }
  render () {
     //const {name} = this.state.data;
     var Res = null;
    if (this.state.data) {
      Res = <Result weather={this.state.data}  />;
    }
    
    // const {name} = this.props;

    return (
      <div>
        <h1>The weather</h1>
        <Find appSearch={this.lookingFor}/>
        {Res}
      </div>
    );
  }
}

export default App
