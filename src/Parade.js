import React from 'react';
import Animal from './Animal';

export default function Parade({ parade, squidPower, crabPower }) {
  return <div>
    {
      parade.map((eachAnimal, i)=> 
        <Animal 
          key={`${eachAnimal} - ${i}`}
          animal={eachAnimal}
          squidPower = {squidPower}
          crabPower = {crabPower}
        />
      )
    }
  </div>;
}
