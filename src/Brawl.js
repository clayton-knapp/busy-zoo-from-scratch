import React from 'react';

export default function Brawl({ squidPower, crabPower }) {
  return <div className='fighting-pit'>
    <span style={{ fontSize: `${squidPower}rem` }}>🦑</span>
    <span style={{ fontSize: `${crabPower}rem` }}>🦀</span>
  </div>;
}
