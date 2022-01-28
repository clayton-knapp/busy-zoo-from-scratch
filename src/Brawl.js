import React from 'react';

export default function Brawl({ squidPower, crabPower, setSquidPower, setCrabPower }) {
  return <div className='brawl'>
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
  </div>;
  
}
