import { useState } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
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
    }
  }

  return (
    <div className="bg-light">
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
