import React from 'react'
import './projects.css'
import IMG1 from '../../assets/portPic1.png'
import IMG2 from '../../assets/portPic2.png'
import IMG3 from '../../assets/portPic3.png'
import IMG4 from '../../assets/portPic4.png'
import IMG5 from '../../assets/portPic5.png'
import IMG6 from '../../assets/portPic6.png'
import IMG7 from '../../assets/portPic7.png'
import IMG8 from '../../assets/portPic8.png'
import IMG9 from '../../assets/portPic9.png'

const projectArr = [
  {
    id: 1,
    image: IMG1,
    title: 'Team Profile Builder',
    github: 'https://github.com/ShahidHashmi1/node-team-profile',
    live: 'https://github.com/ShahidHashmi1/node-team-profile',
  },
  {
    id: 2,
    image: IMG2,
    title: 'SQL Employee Tracker',
    github: 'https://github.com/ShahidHashmi1/SQL-Employee-Tracker',
    live: 'https://github.com/ShahidHashmi1/SQL-Employee-Tracker',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Weather Forecast',
    github: 'https://github.com/ShahidHashmi1/weather-update',
    live: 'https://shahidhashmi1.github.io/weather-update/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'ORM Ecommerce App',
    github: 'https://github.com/ShahidHashmi1/ORM-Ecommerce',
    live: 'https://github.com/ShahidHashmi1/ORM-Ecommerce',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Social Network API',
    github: 'https://github.com/ShahidHashmi1/Social-Network-API',
    live: 'https://github.com/ShahidHashmi1/Social-Network-API',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Txt editor PWA',
    github: 'https://github.com/ShahidHashmi1/PWA-text-editor',
    live: 'https://txt-editor-pwa.herokuapp.com/',
  },
  {
    id: 7,
    image: IMG7,
    title: 'Developer Quiz',
    github: 'https://github.com/ShahidHashmi1/dev-quiz',
    live: 'https://shahidhashmi1.github.io/dev-quiz/',
  },
  {
    id: 8,
    image: IMG8,
    title: 'README.md Generator',
    github: 'https://github.com/ShahidHashmi1/generate-readme',
    live: 'https://github.com/ShahidHashmi1/generate-readme',
  },
  {
    id: 9,
    image: IMG9,
    title: 'Random Password Generator',
    github: 'https://github.com/ShahidHashmi1/Password-Generator',
    live: 'https://shahidhashmi1.github.io/Password-Generator/',
  },

]

const Projects = () => {
  return (
    <section id='projects'>
      <h5>Portfolio</h5>
      <h2>Notable Projects:</h2>
      <div className="container projectContainer">
      {
        projectArr.map(({id, image, title, github, live}) => {
          return (
            <article key={id} className='projectItem'>
              <div className="projectItemImg">
                <img src={image} alt={title}/>
              </div>
                <h3>{title}</h3>
                <div className="projectItem-cta">
                <a href={github} target='_blank' className='btn' rel="noreferrer">GitHub Repository</a>
                <a href={live} target='_blank' className='btn btn-primary' rel="noreferrer">Live Link (if available)</a>
                </div>
            </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Projects