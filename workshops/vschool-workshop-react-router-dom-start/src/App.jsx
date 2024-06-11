import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';

function App() {

  return (
    <div className='site'>
      <Navbar />

      <Home />
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Contact /> */}

      <Footer />
    </div>
  )
}

export default App
