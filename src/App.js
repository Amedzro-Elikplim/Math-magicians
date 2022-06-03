import './App.css';
import { Routes, Route } from 'react-router-dom';
import Calculate from './pages/Calculate';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Nav from './components/Navbar/Nav';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculate" element={<Calculate />} />
        <Route path="/about" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
