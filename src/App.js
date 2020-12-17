import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {

  const [ advice, setAdvice] = useState('');

  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((res) => {
        const { advice } = res.data.slip;
        setAdvice(advice);
      })
      .catch((err) => console.log("This is an Error: ", err))
  }

  const adviceMe = () => {
    fetchAdvice()
  }

  useEffect(() => {
    fetchAdvice()
  },[])

  return (
    <div className="app">
      <div className="card">
        <h2 className="heading">{advice}</h2>

        <button className="button" onClick={adviceMe}>
          <span>GIVE ME ADVICE</span>
        </button>
      </div>
    </div>
  );
}

export default App;
