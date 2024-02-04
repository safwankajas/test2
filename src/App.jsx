import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Home, About, Experience, Tech, Work, Contact, StarsCanvas, ComputersCanvas, Resume } from './components';
import Terminal from './Terminal';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/resume" element={<RedirectSite />} />
        <Route path="/file" element={<Terminal />} />
      </Routes>
    </BrowserRouter>
  );
};

const RedirectSite = () => {
  window.location.href = "/resume.html"; // Absolute path
  return <></>;
};



function Index() {
  return (
    <div className='relative z-0 bg-primary'>
      <div className=' bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <div className=' relative z-0'>
          <Home />
          <StarsCanvas />
        </div>
      </div>
      <About />
      <Experience />
      <Tech />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
