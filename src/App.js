import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Apps from './components/Apps/Apps';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Socials from './components/Socials/Socials';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/socials" element={<Socials />} />
      </Routes>
    </>
  );
}

export default App;
