import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Home Page/HomePage';
import { AboutPage } from './About Page/AboutPage';
import { ContactsPage } from './Contacts Page/ContactsPage';
import { Navigation } from './Navigation/Navigation';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
      </Routes>
    </div>
  );
}

export default App;
