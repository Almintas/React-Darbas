import logo from './logo.svg';
import './App.css';
import { Button } from './Button/Button';
import { Header } from './Header/header';
import { Hero } from './Hero/hero';
import { Greeting } from './Greeting/greeting';

function App() {
  return (
    <div className="App">
        <Greeting isLoggedIn={true} unreadMessages = {[1, 1, 1]}/>
        <Header />
        <Button>Kazkas</Button>
        <Hero>Bet kas</Hero>
    </div>
  );
}

export default App;
