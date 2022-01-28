
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

  const [isClosed, setIsClosed] = useState(false);

  const [parade, setParade] = useState(['puffer', 'fish', 'dolphin', 'whale', 'shark', 'seal', 'lobster', 'squid', 'crab']);

  const [parade2, setParade2] = useState(['crab', 'crab', 'squid', 'dolphin', 'crab', 'crab']);

  console.log(parade);

  return (
    <>
      <Brawl
        squidPower = {squidPower}
        crabPower = {crabPower}
        setSquidPower = {setSquidPower}
        setCrabPower = {setCrabPower}
        isClosed = {isClosed}
      />

      <OpenSign 
        isClosed={isClosed}
        setIsClosed={setIsClosed}
      />
      <Parade 
        parade={parade}
        squidPower={squidPower}
        crabPower={crabPower}
        setParade = {setParade}
        isClosed = {isClosed}
      />
      <Parade 
        parade={parade2}
        squidPower={squidPower}
        crabPower={crabPower}
        setParade = {setParade2}
        isClosed = {isClosed}
      />
    </>
  );
}

export default App;
