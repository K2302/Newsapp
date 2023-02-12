import React from 'react'
import Navbar from './Components/Navbar'
import Health from './Pages/Health';
import Sport from './Pages/Sport';
import General from './Pages/General';
import Business from './Pages/Business';
import Home from './Pages/Home';
import Footer from './Components/footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home></Home>} Route />
          <Route exact path="/Home" element={<Home></Home>} Route />
          <Route path="/general" element={<General></General>} Route />
          <Route path="/business" element={<Business />}></Route>
          <Route path='/Health' element={<Health />}></Route>
          <Route path='/sport' element={<Sport />}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </div>

  )
}

export default App
