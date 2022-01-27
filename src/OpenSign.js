import React from 'react';

export default function OpenSign({ isOpen }) {


  return <div className='sign'>
    <img src={
      (isOpen)
        ? '/sign-open.jpeg'
        : '/sign-closed.jpeg'
    }></img>
  </div>;
}
