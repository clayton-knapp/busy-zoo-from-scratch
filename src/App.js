
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

  const [parade, setParade] = useState(['puffer', 'fish', 'dolphin', 'whale', 'shark', 'seal', 'lobster']);

  console.log(parade);

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
      <div className='parade-container'>
        <div className='buttons-container'>
          <button
            onClick={ ()=> {
              setParade([...parade, 'puffer']);
            }}
          >
            Add Puffer
          </button>
          <button
            onClick={ ()=> {
              setParade([...parade, 'fish']);
            }}
          >
            Add Fish
          </button>
          <button
            onClick={ ()=> {
              setParade([...parade, 'dolphin']);
            }}
          >
            Add Dolphin
          </button>
          <button
            onClick={ ()=> {
              setParade([...parade, 'whale']);
            }}
          >
            Add Whale
          </button>
          <button
            onClick={ ()=> {
              setParade([...parade, 'shark']);
            }}
          >
            Add Shark
          </button>
          <button
            onClick={ ()=> {
              setParade([...parade, 'seal']);
            }}
          >
            Add Seal
          </button>
          <button
            onClick={ ()=> {
              setParade([...parade, 'lobster']);
            }}
          >
            Add Lobster
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
