
import './App.css';
import Brawl from './Brawl';
import { useState } from 'react';
import OpenSign from './OpenSign';
import Parade from './Parade';

function App() {
  // make state
  // 🦑
  const [squidPower, setSquidPower] = useState(10);
  // 🦀
  const [crabPower, setCrabPower] = useState(10);

  const [isOpen, setIsOpen] = useState(true);

  const [parade, setParade] = useState(['puffer', 'fish', 'dolphin', 'whale', 'shark', 'seal', 'lobster', 'squid', 'crab']);

  console.log(parade);

  return (
    <>
      <Brawl
        squidPower = {squidPower}
        crabPower = {crabPower}
        setSquidPower = {setSquidPower}
        setCrabPower = {setCrabPower}
      />
      <OpenSign 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Parade 
        parade={parade}
        squidPower={squidPower}
        crabPower={crabPower}
        setParade = {setParade}
      />
    </>
  );
}

export default App;
