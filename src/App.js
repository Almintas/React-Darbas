import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './Home Page/HomePage';
import { AboutPage } from './About Page/AboutPage';
import { ContactsPage } from './Contacts Page/ContactsPage';

function App() {

  return (
    <div className="App">
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contacts'>Contacts</Link>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
      </Routes>
    </div>
  );
}

export default App;
