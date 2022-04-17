
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Intro from './components/Intro';
import Footer from './components/Footer';
// import Gallery from './components/Gallery';
import Contact from './components/Contact';


import { Suspense, lazy } from 'react';

const Gallery = lazy(() => import('./components/Gallery'))



function App() {
  return (
    <div className="App">
      
      <Nav />
      {/* <Header /> */}
      {/* <Intro /> */}

      <main>
      <Routes>
        <Route path="/" element={<><Header /><Intro /></>} />
          <Route path="/Gallery" element={
            <Suspense fallback={<div>LOADDDDIIIINNGGGGGGG</div>}><Gallery /></Suspense>} />
          <Route path="/Contact" element={<Contact />} />
      </Routes>
      </main>

      <Footer /> 
    </div>
  );
}

export default App;
