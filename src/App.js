import './App.css';
import Contact from './Component/Contact/Contact';
import Experience from './Component/Experience/Experience';
import Intro from './Component/Intro/Intro';
import Navbar from './Component/Navbar/Navbar';
import Services from './Component/Services/Services';


function App() {
  return (
    <div className='app'>
    <Navbar />
    <Intro />
    <Services />
    <Experience />
    <Contact />
    </div>
  );
}

export default App;
