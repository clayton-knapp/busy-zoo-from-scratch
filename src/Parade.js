import React from 'react';
import Animal from './Animal';

export default function Parade({ parade, squidPower, crabPower, setParade, isClosed }) {
  return (
    <div className ='parade-container'>
      <div className ={`parade ${(isClosed) && 'closed'}`}>
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
        <button disabled={isClosed}
          onClick={ ()=> {
            setParade([...parade, 'puffer']);
          }}
        >
            Add Puffer
        </button>
        <button disabled={isClosed}
          onClick={ ()=> {
            setParade([...parade, 'fish']);
          }}
        >
            Add Fish
        </button>
        <button disabled={isClosed}
          onClick={ ()=> {
            setParade([...parade, 'dolphin']);
          }}
        >
            Add Dolphin
        </button>
        <button disabled={isClosed}
          onClick={ ()=> {
            setParade([...parade, 'whale']);
          }}
        >
            Add Whale
        </button>
        <button disabled={isClosed}
          onClick={ ()=> {
            setParade([...parade, 'shark']);
          }}
        >
            Add Shark
        </button>
        <button disabled={isClosed}
          onClick={ ()=> {
            setParade([...parade, 'seal']);
          }}
        >
            Add Seal
        </button>
        <button disabled={isClosed}
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
