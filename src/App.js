import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import MyProfile from './Components/MyProfile/MyProfile';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';

function App() {
  return (
      <div className='main'>
        <Navbar />
        <div className='sections'>    
          <Home />
          <MyProfile />
          <Skills />
          <Contact />
        </div>
      </div>
  );
}

export default App;
