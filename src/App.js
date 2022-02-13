import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import MyProfile from './Pages/MyProfile';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';

function App() {
  return (
    <HashRouter>
      <div className='main'>
        <Navbar /> 
        <Routes>
          <Route  path='/' element={<Home />} exact />
          <Route path='/profile' element={<MyProfile />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
      </Routes>    
      </div>
    </HashRouter> 
    
  );
}

export default App;
