import './styles/App.css';
import Header from './Header.js'
import About from './About.js';
import Projects from './Projects.js';
import { useState } from 'react';

function App() {
  const [display, setDisplay] = useState(false);
  const [headerClass, setHeaderClass] = useState("");
  const [arrowVisible, setVisibilty] = useState(true);

  const displayTabs = () => {
    console.log("display the tabs, shift header up");
    setHeaderClass("-up");
    setDisplay(true);
    setVisibilty(false);
  };

  return (
    <>
      <Header 
        viewButtonFunc={displayTabs}
        headerClass={headerClass}
        arrowVisible = {arrowVisible}
      />
      { !display ? <></> : 
        <div className='tabs'>
          <About />
          <Projects />
        </div> 
      }
    </>
  );
}

export default App;
