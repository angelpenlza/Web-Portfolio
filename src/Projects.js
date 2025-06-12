import './styles/Projects.css';
import py from './icons/python-icon.svg'
import favicon from './icons/favicon.ico';
import { useState } from 'react';

const Arrow = ({direction, goTo}) => {
  return (
    <svg onClick={goTo} className={`${direction}-arrow`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path d="M19 12L31 24L19 36" stroke='currrentColor' strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const FirstDetails = () => {
  return (
    <div className='content'>
      <h5 className='description-label'>Project Description</h5>
      <p className='description'>
        A website that predicts the price of a car depending 
        on given attributes that affect it, such as year, make,
        model and mileage.
      </p>
      <h5 className='description-label'>Development Details</h5>
      <div className='description-details'>
        {/* <p className='developed'>Developed with</p> */}
        <img className='developed-icon' src={favicon} alt='React Icon'/>
        <img className='developed-icon' src={py} alt='Python Icon'/>
      </div>
      <p className='description'>
        Project Duration: April 10th, 2025 - May 15th, 2025. 
        Completion time: 1 month.
        Python ran a server using CORS and communicated with the
        React frontend using HTTPS. 
      </p>

    </div>
  );
};

const FirstCode = () => {
  return (
    <div className='code'>
      <h5 className='description-label'>Code</h5>
    </div>
  );
};

const FirstImage = () => {
  return (
    <div className='project-image'>
      <h5>image</h5>
    </div>
  );
};

const First = () => {
  const [page, setPage] = useState(1);
  const nextPage = () => {
    if(page === 3) setPage(1);
    else setPage(prev => prev + 1);
  };
  const prevPage = () => {
    if(page === 1) setPage(3);
    else setPage(prev => prev - 1);
  }

  return (
    <div className='project'>
      <Arrow goTo={prevPage} direction='left'/>
      { page === 1 && <FirstDetails/> }
      { page === 2 && <FirstCode/> }
      { page === 3 && <FirstImage/> }
      <Arrow goTo={nextPage} direction='right'/>
    </div>
  );
};

const Second = () => {
  return (
    <div className='project'>
      <p>second</p>
    </div>
  );
};

const Third = () => {
  return (
    <div className='project'>
      <p>third</p>
    </div>
  );
};

const Projects = () => {
  const [curProject, setCurProject] = useState(1);

  return (
    <div className='projects-container'>
      <h5>Projects</h5>
      <div className='project-tabs'>
        <div className='project-tab' onClick={() => setCurProject(1)}>Price Predicter</div>
        <div className='project-tab' onClick={() => setCurProject(2)}>Mini Games</div>
        <div className='project-tab' onClick={() => setCurProject(3)}>TBA</div>
      </div>
      { curProject === 1 && <First/> }
      { curProject === 2 && <Second/> }
      { curProject === 3 && <Third /> }
    </div>
  );

};

export default Projects;