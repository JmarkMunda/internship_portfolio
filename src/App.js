import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import MyProfile from './Components/MyProfile/MyProfile';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Knowledge from './Components/Knowledge/Knowledge';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='main'>
      <Navbar />
      <div className='sections'>
        <Home />    
        <MyProfile />
        <Skills />
        <Knowledge />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
