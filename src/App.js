import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from './Components/Footer';
import  Menu  from './Pages/Menu';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
       <Routes>
       <Route  path="/" element={<Home/>}></Route>
       <Route  path="menu" element={<Menu/>}></Route>
       <Route  path="about" element={<About/>}></Route>
       <Route  path="contact" element={<Contact/>}></Route>
       </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
