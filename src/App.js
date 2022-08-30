import React from "react";

import "./App.css";
import Header from "./components/header/header";
import Card from "./components/cards/cards";

import data from "./data/journal";

function App() {
  const journalElement = data.map((item, i) => {
    return (
      <>
        <Card itemCard={item} key={item.id} />
        {i + 1 !== data.length && (
          <div className="divider">
            <hr></hr>
          </div>
        )}
      </>
    );
  });

  return (
    <div className="App">
      <Header />
      <div className="body">{journalElement}</div>
    </div>
  );
}

export default App;
