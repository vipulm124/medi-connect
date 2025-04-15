// import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Patients from './pages/Patients';
import Navbar from './components/Navbar';
import AppointmentPage from './pages/Appointment';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='flex'>
      <Navbar />
      <div className='ml-[200px] w-full p-6'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<AppointmentPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/patients" element={<Patients />} />

        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;