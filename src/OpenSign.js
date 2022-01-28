import React from 'react';

export default function OpenSign({ isClosed, setIsClosed }) {


  return <div className='sign-container'>
    <div className='sign'>
      <img src=
        {
          (isClosed)
            ? '/sign-closed.jpeg'
            : '/sign-open.jpeg'
        }
      />
      {/* OPEN CLOSE BUTTONS WITH CONDITIONAL RENDERING */}
    </div>
    <div className='buttons-container'>
      {
        (!isClosed) && <button
          onClick={ ()=> {
            setIsClosed(true);
          }}
        >
            Close Aquarium!
        </button>
      }
      {
        (isClosed) && <button
          onClick={ ()=> {
            setIsClosed(false);
          }}
        >
            Open Aquarium!
        </button>
      }
    </div>
  </div>;
}
