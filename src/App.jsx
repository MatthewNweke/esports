import { Route, Routes } from 'react-router-dom';
import './App.css';
import Stock from './Pages/Stock';
import Plan from './Pages/Plan';
import About from './Pages/About';
import Contact from './Pages/Contact';
import LogIn from './Pages/LogIn';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Terms from './Pages/Terms';




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
