import { useEffect, useState } from "react";

const Header = ({ viewButtonFunc, headerClass, arrowVisible }) => {
  const greetingString = "hello, my name is";
  const nameString = "Angel Penaloza";
  const intervalLength = greetingString.length + nameString.length;

  const [seconds, setSeconds] = useState(0);
  const [greeting, setGreeting] = useState("");
  const [myName, setName] = useState("");
  const [viewButton, setViewButton] = useState("hidden");

  useEffect(() => {
    let delay; 
    if(seconds >= intervalLength) {
      setViewButton("arrow");
      return;
    }
    if(seconds <= 0) delay = 1000;
    else delay = 70;

    const interval = setInterval(() => {
      if(seconds < greetingString.length) {
        setGreeting(prev => prev + greetingString[seconds]);      
      } else {
        setName(prev => prev + nameString[seconds - greetingString.length]);
      }
      setSeconds(prev => prev + 1);
    }, delay);

    return () => clearInterval(interval);
  }, [seconds, intervalLength]);

  useEffect(() => {
    if(!arrowVisible) {
      setViewButton("hidden");
    }
  }, [arrowVisible]);

  return (
    <div className={`header${headerClass}`}>
      <div className="text">
        <p className="greeting">{greeting}</p>
        <p className="name">{myName}</p>
      </div>
      <div className={viewButton} onClick={viewButtonFunc}>&darr;</div>
    </div>
  );
};

export default Header;