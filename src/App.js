
import react from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/main.css'
import './assets/css/vendors.css'
import Courses from './pages/courses';
import Events from './pages/events';
import Home from './pages/home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='courses' element={<Courses />} />
        <Route path='events' element={<Events />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
