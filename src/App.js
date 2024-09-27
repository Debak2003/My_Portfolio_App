import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contactus from './components/Contactus';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Aboutme from './components/Aboutme';

function App() {
  return (
    <div className="App">
 <Navbar/>
 <Routes>
   
      <Route path='*' element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<Aboutme/>}/>
      <Route path='/education' element={<Education/>}/> 
      <Route path='/skill' element={<Skills/>}/> 
      <Route path='/project' element={<Projects/>}/>
      <Route path='/contact' element={<Contactus/>}/>

    </Routes>
    </div>
  );
}

export default App;
