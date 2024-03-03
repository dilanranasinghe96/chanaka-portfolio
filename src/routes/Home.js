import React from 'react';

import Footer from '../components/Footer';
import Heroimg from '../components/Heroimg';
import Navbar from '../components/Navbar';
import Works from "../components/Works";



const Home = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg/>
      <Works/>
      <Footer/>
    </div>
  )
}

export default Home
