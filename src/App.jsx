import { Route, Routes } from 'react-router-dom';
import './App.css';
import Stock from './Pages/Stock';
import Plan from './Pages/Plan';
import About from './Pages/About';
import Contact from './Pages/Contact';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Stock />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
