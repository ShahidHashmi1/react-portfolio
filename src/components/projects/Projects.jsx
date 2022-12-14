import React from 'react'
import './projects.css'
import IMG from '../../assets/rocketship.jpg'

const Projects = () => {
  return (
    <section id='projects'>
      <h5>Portfolio</h5>
      <h2>Notable Projects:</h2>
      <div className="container projectContainer">

        <article className='projectItem'>
          <div className="projectItemImg">
            <img src={IMG} alt='projectImg'/>
          </div>
            <h3>Project Title</h3>
            <div className="projectItem-cta">
            <a href='https://github.com/ShahidHashmi1' target='_blank' className='btn'>GitHub Repository</a>
            <a href='#' target='_blank' className='btn btn-primary'>Live/ Deployed Page</a>
            </div>
        </article>

        <article className='projectItem'>
          <div className="projectItemImg">
            <img src={IMG} alt='projectImg'/>
          </div>
            <h3>Project Title</h3>
            <div className="projectItem-cta">
            <a href='https://github.com/ShahidHashmi1' target='_blank' className='btn'>GitHub Repository</a>
            <a href='#' target='_blank' className='btn btn-primary'>Live/ Deployed Page</a>
            </div>
        </article>

        <article className='projectItem'>
          <div className="projectItemImg">
            <img src={IMG} alt='projectImg'/>
          </div>
            <h3>Project Title</h3>
            <div className="projectItem-cta">
            <a href='https://github.com/ShahidHashmi1' target='_blank' className='btn'>GitHub Repository</a>
            <a href='#' target='_blank' className='btn btn-primary'>Live/ Deployed Page</a>
            </div>
        </article>

        <article className='projectItem'>
          <div className="projectItemImg">
            <img src={IMG} alt='projectImg'/>
          </div>
            <h3>Project Title</h3>
            <div className="projectItem-cta">
            <a href='https://github.com/ShahidHashmi1' target='_blank' className='btn'>GitHub Repository</a>
            <a href='#' target='_blank' className='btn btn-primary'>Live/ Deployed Page</a>
            </div>
        </article>

        <article className='projectItem'>
          <div className="projectItemImg">
            <img src={IMG} alt='projectImg'/>
          </div>
            <h3>Project Title</h3>
            <div className="projectItem-cta">
            <a href='https://github.com/ShahidHashmi1' target='_blank' className='btn'>GitHub Repository</a>
            <a href='#' target='_blank' className='btn btn-primary'>Live/ Deployed Page</a>
            </div>
        </article>

        <article className='projectItem'>
          <div className="projectItemImg">
            <img src={IMG} alt='projectImg'/>
          </div>
            <h3>Project Title</h3>
            <div className="projectItem-cta">
            <a href='https://github.com/ShahidHashmi1' target='_blank' className='btn'>GitHub Repository</a>
            <a href='#' target='_blank' className='btn btn-primary'>Live/ Deployed Page</a>
            </div>
        </article>

      </div>
    </section>
  )
}

export default Projects