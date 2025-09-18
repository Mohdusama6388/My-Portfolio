import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Skills from './Pages/Skills';
import Resume from './Pages/Resume';
import Projects from './Pages/Project';
import SinglePage from './SinglePage'

import Layout from './Layout';
import Footer from './Footer';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<SinglePage />} />
          <Route path="/Contact" element={<Contact />} />  
          <Route path="/Skills" element={<Skills />} /> 
          <Route path="/Projects" element={<Projects />} /> 
          <Route path="/Resume" element={<Resume />} /> 
        </Routes>
      </Layout>
      <Footer />
    </>
  );
}

export default App;
