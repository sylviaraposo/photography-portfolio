
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      
      <Nav />
      {/* <Header /> */}
      {/* <Intro /> */}

      <main>
      <Routes>
        <Route path="/" element={<><Header /><Intro /></>} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
      </Routes>
      </main>

      <Footer /> 
    </div>
  );
}

export default App;
