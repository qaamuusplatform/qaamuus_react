
import react from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/main.css'
import './assets/css/vendors.css'
import CourseDetail from './pages/courseDetail';
import Courses from './pages/courses';
import EventDetail from './pages/eventDetail';
import Events from './pages/events';
import Home from './pages/home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='courses' element={<Courses />} />
        <Route path='events' element={<Events />} />
        <Route path='course/:crId' element={<CourseDetail />} />
        <Route path='event/:evtId' element={<EventDetail />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
