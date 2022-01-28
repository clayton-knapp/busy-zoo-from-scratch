import React from 'react';

export default function Animal({ animal, squidPower, crabPower }) {
  return (
    <>
      {
        (animal === 'squid')
          ? <span className='animal' style={{ fontSize: `${(squidPower * .2)}rem` }}>🦑</span>
          : ''
      }
      {
        (animal === 'crab')
          ? <span className='animal' style={{ fontSize: `${(crabPower * .2)}rem` }}>🦀</span>
          : ''
      }
      <span className='animal'>
        {(animal === 'puffer') && '🐡'}
        {(animal === 'fish') && '🐠'}
        {(animal === 'dolphin') && '🐬'}
        {(animal === 'whale') && '🐋'}
        {(animal === 'shark') && '🦈'}
        {(animal === 'seal') && '🦭'}
        {(animal === 'lobster') && '🦞'}
        {/* {(animal === 'squid') && '🦑'}
        {(animal === 'crab') && '🦀'} */}
      </span>
    </>
  );
}
