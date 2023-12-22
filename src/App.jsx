import { Route, Routes } from 'react-router-dom';
import './App.css';
import Stock from './Pages/Stock';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Stock />} />
      </Routes>
    </div>
  );
}

export default App;
