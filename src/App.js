import './App.css';
import { Routes, Route } from 'react-router-dom';
import Calculate from './pages/Calculate';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculate" element={<Calculate />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
