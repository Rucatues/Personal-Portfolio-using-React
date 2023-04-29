import { useState } from 'react';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  const [currentPage, setCurrentPage] = useState('About');

  function renderPage() {
    if (currentPage === 'About') {
      return <About />
    } else if (currentPage === 'Contact') {
      return <Contact />
    } else if (currentPage === 'Portfolio') {
      return <Portfolio />
    } else if (currentPage === 'Resume') {
      return <Resume />
    }

  }

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
