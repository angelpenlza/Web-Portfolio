import './styles/About.css'
import favicon from './icons/favicon.ico';
import native from './icons/react-native.svg';
import cpp from './icons/cpp-icon.svg';
import c from './icons/c.svg'
import py from './icons/python-icon.svg'
import html from './icons/html-icon.svg'
import css from './icons/css-icon.svg'
import js from './icons/js-icon.svg'
import linkedin from './icons/linkedin.svg'
import github from './icons/github.svg'
import instagram from './icons/instagram.svg'

const Icon = ({ src, alt, years }) => {
  let plural;
  if(years <= 1) plural = "year";
  else plural = "years";
  return (    
    <div className="icon-pair">
      <img src={src} alt={alt} />
      <h4>{alt}</h4>
      <p className="years">{years} {plural}</p>
    </div>
  );
};

const Social = ({ href, src, alt }) => {
  return (
    <a target='_blank' rel='noreferrer' href={href}>
      <img className='social' src={src} alt={alt} />
    </a>
  );
};

const About = () => {
  return (
    <div className="container">
      <h3 className='about-title'>About Me</h3>
      <div className="basics">
        <p>I am a Full-Stack Developer.</p>
        <p>Specialize in website and 
          mobile application development with React and React Native.
        </p>

        <div className='links'>
          <Social
            href={'https://www.linkedin.com/in/angel-penaloza-463154271/'}
            src={linkedin}
            alt={'Linkedin Icon'}
          />
          <Social
            href={'https://github.com/angelpenlza'}
            src={github}
            alt={'Github Icon'}
          />
          <Social
            href={'http://instagram.com/angelpenlza/'}
            src={instagram}
            alt={'Instagram Icon'}
          />
        </div>
      </div>
      <h3 className='about-title'>Credentials</h3>
      <div className="school">
        <p>Bachelor's Degree in Computer Science</p>
        <p>California State University, Fullerton</p>
      </div>
      <h3 className='about-title'>Languages</h3>
      <div className="languages">
        <Icon src={favicon} alt={"React"} years={1}/>
        <Icon src={native} alt={"Native"} years={1}/>
        <Icon src={py} alt={"Python"} years={2}/>
        <Icon src={cpp} alt={"C++"} years={4}/>
        <Icon src={c} alt={"C"} years={3}/>
        <Icon src={html} alt={"HTML"} years={3}/>
        <Icon src={css} alt={"CSS"} years={3}/>
        <Icon src={js} alt={"Javascript"} years={3}/>
      </div>
    </div>
  );
};

export default About;

