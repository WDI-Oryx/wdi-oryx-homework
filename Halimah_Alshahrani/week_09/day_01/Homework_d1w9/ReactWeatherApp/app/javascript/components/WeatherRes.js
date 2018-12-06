import React from "react"

class WeatherRes extends React.Component {
  render() {
    const { temp, humidity } = this.props;
    return (
      <div>
        <h4> Tempreture : {temp} </h4>
        <h4> Humidity :{humidity} </h4>
     
      </div>
    );
  }
}
export default WeatherRes;



