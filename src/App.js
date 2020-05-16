import React from 'react';
import Router from './Router';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          <img src={logo} width="30" height="30" alt="" />
        </Link>
      </nav>

      <div className="container-fluid">

        <Router />

      </div>
    </>
  );
}

export default App;
