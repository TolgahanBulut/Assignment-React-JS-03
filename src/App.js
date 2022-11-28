import { useState } from 'react';
import './App.css';
import {Users} from './Users';

function App() {
  const [query , setQuery] = useState("");
  return (
    <div className="App">
      <div>
        <input type="text"  className='search' placeholder='Search' onChange={e=> setQuery(e.target.value)}/>
      </div>
      <div>
        <ul className='list'>
          {Users.filter(user => user.first_name.toLowerCase().includes(query)).map((user) => (
          <li className='list-item' key={user.id}>{user.first_name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
