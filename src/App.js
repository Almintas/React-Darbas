import React from 'react';
import './App.css';
import { Routes, Link, Route } from 'react-router-dom';
import { PageLayout } from './PageLayout';
import { useState } from 'react';

const HomePage = React.lazy(() => import('./Home Page/HomePage'));
const ContactsPage = React.lazy(() => import('./Contacts Page/ContactsPage'));
const AboutPage = React.lazy(() => import('./AboutPage/AboutPage'));
const LoginPage = React.lazy(() => import('./LoginPage/LoginPage'));

function App() {

  const [user, setUser] = useState(null);

  return (
    <div className="App">

      <Link to='/'>Home</Link>
      <Link to='/contacts'>Contacts</Link>
      <Link to='/about'>About</Link>
      <Link to='/login'>Login</Link>

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
            <LoginPage />
          </React.Suspense>
          } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
