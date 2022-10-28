import { Link } from "react-router-dom";

function App() {
  return (
    <>
    <h1>Bienvenido</h1>
    <Link to="/users">
      <button type="button" className="btn btn-primary">Go to Users</button>
    </Link>
    </>
  );
}

export default App;
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
