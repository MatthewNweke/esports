import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import LogIn from './pages/LogIn';
import Plan from './pages/Plan';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Stock from './pages/Stock';
import Terms from './pages/Terms';




function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Stock />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms & condition" element={<Terms />} />
      </Routes>
    </div>
  );
}

export default App;
