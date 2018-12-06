import React from "react";

class Result extends React.Component {
  render() {
             
    const { name, desc } = this.props;
             return <div>
                 <h4>{name}</h4>
                 <p>{desc}</p>
               </div>;
           }
}

export default Result;
