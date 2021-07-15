import React from 'react';import Navbar from './Navbar';
import Signup from './Signup';
;

function App() {
  return (
    <div className="container">
      <Navbar auth={false}/>
      <Signup/>
    </div>
  );
}

export default App;
