import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {BsPersonCircle} from 'react-icons/bs'
import {GiSkills} from 'react-icons/gi'
import {FaListAlt} from 'react-icons/fa'
import {MdOutlineContactMail} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeClass, setActiveClass] = useState('');
  return (
    <nav>
      <a href='#' onClick={() => setActiveClass('#')} className={activeClass === '#' ? 'active' : ''}><FaHome/></a>
      <a href='#bio' onClick={() => setActiveClass('#bio')} className={activeClass === '#bio' ? 'active' : ''}><BsPersonCircle/></a>
      <a href='#experience' onClick={() => setActiveClass('#experience')} className={activeClass === '#experience' ? 'active' : ''}><GiSkills/></a>
      <a href='#projects' onClick={() => setActiveClass('#projects')} className={activeClass === '#projects' ? 'active' : ''}><FaListAlt/></a>
      <a href='#contact' onClick={() => setActiveClass('#contact')} className={activeClass === '#contact' ? 'active' : ''}><MdOutlineContactMail/></a>
    </nav>
  )
}

export default Nav