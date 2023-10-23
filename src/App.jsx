import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import About from "./views/About";
import Contact from "./views/Contact";
import Error from "./views/Error";
import Resume from "./views/Resume";
import Work from "./views/Work";
import Header from './components/Navbar';
import Footer from './components/Footer';



function App() {

  return (
  <Router>
    <Header/>
    <Routes>
    <Route path = '/' element = {<About/>}/>
    <Route path = '/about' element = {<About/>}/>
    <Route path = '/contact' element = {<Contact/>}/>
    <Route path = '/resume' element = {<Resume/>}/>
    <Route path = '/work' element = {<Work/>}/>
    <Route path = '*' element = {<Error/>}/>
    </Routes>
    <Footer/>
  </Router>
  )
}

export default App
