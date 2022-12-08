import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {BsPersonCircle} from 'react-icons/bs'
import {GiSkills} from 'react-icons/gi'
import {FaListAlt} from 'react-icons/fa'
import {MdOutlineContactMail} from 'react-icons/md'

const Nav = () => {
  return (
    <nav>
      <a href='#'><FaHome/></a>
      <a href='#bio'><BsPersonCircle/></a>
      <a href='#experience'><GiSkills/></a>
      <a href='#projects'><FaListAlt/></a>
      <a href='#conact'><MdOutlineContactMail/></a>
    </nav>
  )
}

export default Nav