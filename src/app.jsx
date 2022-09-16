import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Recipes from './pages/recipes';
import About from './pages/about';
import Post from './pages/post';
import Footer from './components/footer';
import colors from './assets/utils/colors';

export default function App() {
  return (
    <Router>
      <Navbar
        pos='sticky'
        color={colors.ny_pink}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes/:postID/:postName" element={<Post />} />
      </Routes>
      <Footer color={colors.laurel_green} />
    </Router>
  );
}
