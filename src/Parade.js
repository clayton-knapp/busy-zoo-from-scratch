import React from 'react';
import Animal from './Animal';

export default function Parade({ parade, squidPower, crabPower, setParade }) {
  return (
    <div className ='parade-container'>
      <div className ='parade'>
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
      </div>
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
  );
}
