import React from 'react';
import Animal from './Animal';

export default function Parade({ parade }) {
  return <div>
    {
      parade.map((eachAnimal, i)=> 
        <Animal 
          key={`${eachAnimal} - ${i}`}
          animal={eachAnimal}
        />
      )
    }
  </div>;
}
