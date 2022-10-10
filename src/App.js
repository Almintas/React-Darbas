import logo from './logo.svg';
import './App.css';
import { Button } from './Button/Button';
import { Header } from './Header/header';
import { Hero } from './Hero/hero';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Codeacademy.lt <code></code> React paskaita!
        </p>
        <Header />
        <Button>Kazkas</Button>
        <a
          className="App-link"
          href="https://codeacademy.lt"
          target="_blank"
          rel="noopener noreferrer"
        >
          Codeacademy
        </a>
        <Hero>Bet kas</Hero>
      </header>
    </div>
  );
}

export default App;
