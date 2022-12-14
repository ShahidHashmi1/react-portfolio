import React from 'react';
import './bio.css';
import headshot from '../../assets/headshot-min.jpg';

const Bio = () => {
  return (
    <section id="bio">
      <div className="container aboutContainer">
        <div className="aboutMe">
          <div className="aboutMeImg">
            <img src={headshot} alt="headshot" />
          </div>
        </div>
        <div className="bioContent">
          <div className="bioCards">
              <article className="aboutMeCard"></article>
            <p className='firstPara'>
              This portfolio showcases some of my abilities and projects, but to summarize the purpose of the page and who I am:
            </p>
            <br/>
            <p>
              An application developer with a track record of working in rapidly
              changing environments, while adapting and learning quickly to
              accomplish team-oriented tasks. I am eager to transfer my skills to
              a similarly exciting and evolving industry, while also expanding on
              my existing programming comprehension with a reputable organization.
              I am seeking an entry-level role as a junior developer. It is my
              hope to learn and grow to a senior level or higher within the
              organization and become a primary contributor that the organization
              can rely on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
