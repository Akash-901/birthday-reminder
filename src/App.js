import './index.css';
import React, { useState } from 'react';
import { data } from './data';
import List from './components/List';

function App() {
  const [people, setPeople] = useState(data);
  return (
    <div className="container">
      <h3>{people.length} birthdays today</h3>
      <List people={people} />
      <button className="btn" onClick={() => setPeople([])}>Clear All</button>
    </div>
  );
}

export default App;
