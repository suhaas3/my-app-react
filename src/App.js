
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home";
import Navbar from './Components/Navbar/Navbar';
import Courses from './Components/Courses/Courses';
import Events from './Components/Events/Events';
import Clubs from './Components/Clubs/Clubs';


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/home" element={<Home />} />
           <Route path="/courses" element={<Courses />} />
            <Route path="/events" element={<Events />} />
             <Route path="/clubs" element={<Clubs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
