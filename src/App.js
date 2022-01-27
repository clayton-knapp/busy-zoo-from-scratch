
import './App.css';
import Brawl from './Brawl';
import { useState } from 'react';
import OpenSign from './OpenSign';

function App() {
  // make state
  // 🦑
  const [squidPower, setSquidPower] = useState(10);
  // 🦀
  const [crabPower, setCrabPower] = useState(10);

  const [isOpen, setIsOpen] = useState(true);

  // console.log(isOpen);

  return (
    <>
      <Brawl />
      <div className='brawl'>
        <div className='fighting-pit'>
          <span style={{ fontSize: `${squidPower}rem` }}>🦑</span>
          <span style={{ fontSize: `${crabPower}rem` }}>🦀</span>
        </div>
        <div className='buttons-container'>
          <div>
            {/* Squid Buttons */}
            <button
              onClick={ ()=> {
                setSquidPower(squidPower + 1);
              }}
            >
              Boost Squid!
            </button>
            <button
              onClick={ ()=> {
                setCrabPower(crabPower - 1);
              }}
            >
              Attack Crab!
            </button>
          </div>
          <div>
            {/* Crab Buttons */}
            <button
              onClick={ ()=> {
                setCrabPower(crabPower + 1);
              }}
            >
              Boost Crab!
            </button>
            <button
              onClick={ ()=> {
                setSquidPower(squidPower - 1);
              }}
            >
              Attack Squid!
            </button>
          </div>
        </div>
      </div>
      <div className='sign-container'>
        <OpenSign isOpen={isOpen}/>
        {/* OPEN/CLOSE BUTTONS */}
        <div className='buttons-container'>
          {
            (!isOpen) && <button
              onClick={ ()=> {
                setIsOpen(true);
              }}
            >
            Open Zoo!
            </button>
          }
          {
            (isOpen) && <button
              onClick={ ()=> {
                setIsOpen(false);
              }}
            >
            Close Zoo!
            </button>
          }
        </div>
      </div>
    </>
  );
}

export default App;
