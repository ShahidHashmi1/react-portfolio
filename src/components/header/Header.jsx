/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './header.css'
import CTA from './CTA'
import topPic from '../../assets/newTopPic.jpeg'
import Socials from './Socials'
import {FaLongArrowAltRight} from 'react-icons/fa'

const Header = () => {
  return (
    <header>
      <div className="container headerContainer">
        <h5>Hello there! My name is</h5>
        <h1>Shahid A. Hashmi</h1>
        <h5>Fullstack Developer</h5>
        <CTA/>
        <Socials/>
          <div className="me">
            <img src={topPic}></img>
          </div>

          <a href="#contact" className="scrollDown">Scroll Down<FaLongArrowAltRight/></a>

      </div>
    </header>
  )
}

export default Header