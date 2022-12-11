import React from 'react'
import './bio.css'
import headshot from '../../assets/headshot-min.jpg'

const Bio = () => {
  return (
    <section id='bio'>
      <h1>Bio</h1>

      <div className="container aboutContainer">
        <div className="aboutMe">
          <div className="aboutMeImg">
            <img src={headshot} alt="headshot" />
          </div>
        </div>
        <div className="bioContent">
          <div className="bioCards">
            {/* individual articles for each thing, aboutme blurb, technologies etc. */}
            <article className='aboutMeCard'>
              
            </article>
            <article className='techCard'>

            </article>
            <article className='aboutMeCard'>

            </article>
          </div>

          <p>
            On a professional level - I began my career in the sales realm, where I developed an innate ability to work well in a team environment to accomplish common goals, while maintaining communication and collaboration. Working prodominently in the financial services sector, this has allowed me to gain access to some very interesting softwares and processes that the typical person might not be exposed to. Without knowing at the time, I was able to get ahead in my career by using software to streamline my day-to-day activities. An example of this would be me reading deep into the documentation about how to query certain fields, to then export a customized report that had a certain file format that was readable in another program... Little did I know that I was already doing what developers do every single day: reading documentation, experimenting, testing, then implementing. 
          </p>

        </div>
      </div>
    </section>
  )
}

export default Bio