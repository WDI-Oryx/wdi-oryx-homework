import React from "react"; 
import ReactDOM from "react-dom"; 
import Greeting from "./Greeting";
import Hello from "./Hello";
import StudentList from "./StudentList";
import Tweet from "./Tweet";
import ClickCounter from "./Clickcounter";
import DatePrinter from "./DatePrinter";
import MessagePreview from "./MessagePreview";



// ReactDOM.render(
//   <Hello name="Kane" hometown="Sydney "/>,
//   document.querySelector("#app")
// );


ReactDOM.render(
  <div><MessagePreview />
  <DatePrinter />
  <ClickCounter />
  </div>,
  document.querySelector("#app")
);



// ReactDOM.render(<Tweet content="something"/>,
//   document.querySelector("#app"));