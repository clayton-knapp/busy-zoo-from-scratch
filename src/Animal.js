import React from 'react';

export default function Animal({ animal }) {
  return (
    <span className='animal'>
      {(animal === 'puffer') && '🐡'}
      {(animal === 'fish') && '🐠'}
      {(animal === 'dolphin') && '🐬'}
      {(animal === 'whale') && '🐋'}
      {(animal === 'shark') && '🦈'}
      {(animal === 'seal') && '🦭'}
      {(animal === 'lobster') && '🦞'}
    </span>
  );
}
