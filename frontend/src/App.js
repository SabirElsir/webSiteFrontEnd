import logo from './logo.svg';
import './App.css';
import About from './components/about';
import { Link } from 'react-router-dom';

function App() {
  function aboutButtonClicked(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }
  return (
    <div className="App">
      <button onClick={aboutButtonClicked}>about</button>
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
      <About />
    </div>
  );
}

export default App;
