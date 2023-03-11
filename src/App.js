import React, { useState } from 'react';
import './App.css';

function App() {
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('https://api.github.com/search/repositories?q=${keyword}')
    .then(res => res.json())
    .then(data => setData(data.items))
    .catch(err => console.error(err));
  }

  return (
    <div className="App">
      <input value={keyword} onChange={e => setKeyword(e.target.value)}></input>
      <button onClick={fetchData}>Fetch</button>
      <table>
        <tbody>
          {
            data.map(repo => 
             <tr>
              <td>{repo.full_name}</td> 
              <td>
                <a href={repo.html_url}>{repo.html_url}</a>
              </td>
             </tr> 
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
