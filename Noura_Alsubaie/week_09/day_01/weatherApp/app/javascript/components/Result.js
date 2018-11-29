import React from "react"



class Result extends React.Component {
  render () {
        const { city, humidity, temp, country} = this.props;
        // console.log(humidity, city, temp, country)

    return (
      <div>
          <h5> {city}, {country}</h5>
          <h5>Humidity: {humidity}</h5>
          <h5>Temperature: {temp} </h5>

      </div>
    );
  }
}

export default Result
