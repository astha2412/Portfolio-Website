import React from "react";
import './App.css';
import './index.css';
import Header from './Components/header/Header';
import Nav from './Components/nav/Nav';
import About from './Components/about/About';
import Experience from './Components/experience/Experience';
import Portfolio from './Components/portfolio/Portfolio';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
export default App;
