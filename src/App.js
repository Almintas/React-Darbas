import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Codeacademy.lt <code></code> React paskaita!
        </p>
        <a
          className="App-link"
          href="https://codeacademy.lt"
          target="_blank"
          rel="noopener noreferrer"
        >
          Codeacademy
        </a>
      </header>
    </div>
  );
}

export default App;
