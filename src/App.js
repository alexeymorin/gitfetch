import React, { useState } from 'react';
import './App.css';

const fetchData = () => {
  // REST API call
}

function App() {
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <input value={keyword} onChange={e => setKeyword(e.target.value)}></input>
      <button onClick={fetchData}>Fetch</button>
    </div>
  );
}

export default App;
