import './App.css';
import Navbar from './layout/Navbar';
import Footer from "./layout/Footer"

import {Routes, Route} from "react-router-dom"

import { Home } from './pages/home/Home';
import Projects from './pages/projects/Projects';
import { Apartament } from './pages/apartament/Apartament';
import { Contact } from './pages/contact/Contact';
import { AboutApartament } from './pages/aboutApartament/AboutApartament';

function App() {
  return (
    <>
    <Navbar />
     <Routes>
      <Route path='/' element={<Home /> } />
      <Route path='/projects' element={<Projects />} />
      <Route path="/projects/:id" element={<Apartament />} />
      <Route path='/aboutApartament/:id' element={<AboutApartament />} />
      <Route path='/contact' element={<Contact />} />
     </Routes>
     <Footer />
    </>
  );
}

export default App;
