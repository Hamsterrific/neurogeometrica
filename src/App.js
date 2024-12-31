import './styles/styles.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BurgerMenu from './components/BurgerMenu';
import JobsPage from './pages/JobsPage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <BurgerMenu />
      <Routes>
        <Route path={'/jobs'} element={<JobsPage />} />
        <Route path={'/'} element={<AboutPage />} />
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/contact'} element={<ContactsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
