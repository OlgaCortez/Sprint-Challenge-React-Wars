import React, { useState, useEffect } from 'react';
import axios from "axios";
import StarWarsCard from "./components/StarWarsCard.js";
import './App.css';

const App = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
    .then(response => {
    console.log(response.data.results);
    setResults(response.data.results);
    });
  },[]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      
      <div className="entry">
        {results.map((resultsUrl,i) => {
          return <StarWarsCard key={i} result={resultsUrl} />
      })}
    </div>
    </div>
  );
}

export default App;
