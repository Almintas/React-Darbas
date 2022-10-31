import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Home Page/HomePage';
import { ContactsPage } from './Contacts Page/ContactsPage';
import { PageLayout } from './PageLayout';
import { LoginPage } from './LoginPage/LoginPage';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = () => setUser({ username: 'Petras' })
  const handleLogout = () => setUser(null)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PageLayout user={user} onLogout={handleLogout} />}>
          <Route index element={<HomePage />} />
          <Route path='/contacts' element={<ContactsPage />} />
        </Route>
        <Route path='/login' element={<LoginPage onLogin={handleLogin} />} />
      </Routes>
    </div>
  );
}

export default App;
