import React from 'react'
import './experience.css'
import {RiReactjsLine} from 'react-icons/ri'
import {ImHtmlFive2} from 'react-icons/im'
import {TbBrandCss3} from 'react-icons/tb'
import {TbBrandJavascript} from 'react-icons/tb'
import {BsBootstrap} from 'react-icons/bs'
import {DiJqueryUiLogo} from 'react-icons/di'
import {SiExpress} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {SiApollographql} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {SiMysql} from 'react-icons/si'
import {SiSequelize} from 'react-icons/si'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills/ Experience</h5>
      <h2>Technologies Used:</h2>

      <div className="container experienceContainer">

      <div className="experienceFront">
        <h3>Frontend Development</h3>
        <div className="experienceContent">

          <article className='experienceDetails'>
            <div className="icon">
            <RiReactjsLine/>
            </div>
            <h4 className='iconHead'>React</h4>
          </article>

          <article className='experienceDetails'>
            <div className="icon">
            <ImHtmlFive2/>
            </div>
            <h4 className='iconHead'>HTML</h4>
          </article>

          <article className='experienceDetails'>
            <div className="icon">
            <TbBrandCss3/>
            </div>
            <h4 className='iconHead'>CSS</h4>
          </article>

          <article className='experienceDetails'>
            <div className="icon">
            <TbBrandJavascript/>
            </div>
            <h4 className='iconHead'>Javascript</h4>
          </article>

          <article className='experienceDetails'>
            <div className="icon">
            <BsBootstrap/>
            </div>
            <h4 className='iconHead'>Bootstrap</h4>
          </article>

          <article className='experienceDetails'>
            <div className="icon">
            <DiJqueryUiLogo/>
            </div>
            <h4 className='iconHead'>jQuery</h4>
          </article>

        </div>
      </div>
      
      <div className="experienceBack">
        <h3>Backend Development</h3>
        <div className="experienceContent">

          <article className='experienceDetails'>
          <div className='icon'>
            <FaNodeJs/>
            </div>
            <h4 className='iconHead'>Node JS</h4>
          </article>

          <article className='experienceDetails'>
          <div className='icon'>
            <SiMongodb/>
            </div>
            <h4 className='iconHead'>MongoDB</h4>
          </article>

          <article className='experienceDetails'>
          <div className='icon'>
            <SiMysql/>
            </div>
            <h4 className='iconHead'>MySQL</h4>
          </article>

          <article className='experienceDetails'>
          <div className='icon'>
            <SiExpress/>
            </div>
            <h4 className='iconHead'>Express JS</h4>
          </article>

          <article className='experienceDetails'>
            <div className='icon'>
            <SiApollographql/>
            </div>
            <h4 className='iconHead'>Apollo GraphQL</h4>
          </article>
          
          <article className='experienceDetails'>
            <div className='icon'>
            <SiSequelize/>
            </div>
            <h4 className='iconHead'>Sequelize</h4>
          </article>

        </div>
      </div>

      </div>
    </section>
  )
}

export default Experience