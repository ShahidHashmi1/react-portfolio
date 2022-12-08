import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Bio from './components/bio/Bio'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <Bio/>
    <Experience/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;