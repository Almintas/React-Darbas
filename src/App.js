import React from 'react';
import './App.css';
import { Routes, Link, Route } from 'react-router-dom';
import { PageLayout } from './PageLayout';
import { useState } from 'react';

const HomePage = React.lazy(() => import('./Home Page/HomePage'));
const ContactsPage = React.lazy(() => import('./Contacts Page/ContactsPage'));
const AboutPage = React.lazy(() => import('./AboutPage/AboutPage'));
const LoginPage = React.lazy(() => import('./LoginPage/LoginPage'));

export const ThemeContext = React.createContext();

function App() {

  const [user, setUser] = useState(null);
  const [isDark, setIsDark] = useState();

  const handleThemeChange = () => setIsDark(!isDark);

  const handleLogin = (username) => setUser({ username });

  return (
    <div className="App">
      <Link to='/'>Home</Link>
      <Link to='/contacts'>Contacts</Link>
      <Link to='/about'>About</Link>
      <Link to='/login'>Login</Link>

      <ThemeContext.Provider value={{ isDark, changeTheme: handleThemeChange, themeColor: 'yellow' }}>
      <Routes>
        <Route index element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <PageLayout user={user} />
            <HomePage />
          </React.Suspense>
        } />
        <Route path='/contacts' element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <ContactsPage />
          </React.Suspense>
        } />
        <Route path='/about' element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <AboutPage />
          </React.Suspense>
        } />
        <Route>
          <Route path='/login' element={
          <React.Suspense fallback={<div>Loading</div>}>
            <LoginPage onLogin={handleLogin} />
          </React.Suspense>
          } />
        </Route>
      </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
