
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Gallery from './components/Gallery';


function App() {
  return (
    <div className="App">
      
      <Nav />
      <Header />
      <Intro />
      <Footer /> 

      <main>
      <Routes>
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
