import React from 'react';

export default function OpenSign({ isOpen, setIsOpen }) {


  return <div className='sign-container'>
    <div className='sign'>
      <img src=
        {
          (isOpen)
            ? '/sign-open.jpeg'
            : '/sign-closed.jpeg'
        }
      />
      {/* OPEN CLOSE BUTTONS WITH CONDITIONAL RENDERING */}
    </div>
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
  </div>;
}
