// App.js

import React from 'react';
import PlayersList from './PlayerList';
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <div>
      <h1 className="text-center">Players List</h1>
      <PlayersList />
    </div>
  );
};

export default App;
