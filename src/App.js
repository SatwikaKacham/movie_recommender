import React, { useState } from "react";
import "./styles.css";
var moviesList = {
  RomCom: [
    { name: "Work it", rate: "5/5" },
    { name: "The fault in our stars", rate: "4.8/5" },
    { name: "Tall girl", rate: "4.5/5" }
  ],

  Action: [
    { name: "Avengers", rate: "4.8/5" },
    { name: "X-men", rate: "4.8/5" },
    { name: "Wonder Women", rate: "4.2/5" }
  ],

  Science: [
    { name: "Inception", rate: "4.8/5" },
    { name: "Tenet", rate: "4.5/5" },
    { name: "Gravity", rate: "4.5/5" }
  ],
  Drama: [
    { name: "Instant Family", rate: "5/5" },
    { name: "Five feets a part", rate: "4.5/5" },
    { name: "The Tomorrow War", rate: "4/5" }
  ]
};
var topics = Object.keys(moviesList);
export default function App() {
  var [finalList, setFinalList] = useState([]);
  function clickHandler(topic) {
    setFinalList(moviesList[topic]);
    // console.log(moviesList[topic]);
  }

  return (
    <div className="App">
      <h1 className="head">
        <span style={{ color: "#ffbe0b" }}>M📽️vies</span> Recommender
      </h1>
      <div>All movies which I prefer.Opt your choice👉</div>
      {topics.map(function (topic) {
        return (
          <button key={topic} onClick={() => clickHandler(topic)}>
            {topic}
          </button>
        );
      })}
      <hr />

      <div>
        {/* {console.log(finalList)}; */}
        {finalList.map(function (item) {
          return (
            <li key={item.name}>
              <div className="itemName">{item.name}</div>
              <div className="itemrate">{item.rate}</div>
            </li>
          );
        })}
      </div>
    </div>
  );
}
