import React from 'react';
import { useState } from 'react';

import Cards from './Components/Cards';
import NavBar from './Components/NavBar';

const InterviewTest = () => {
  const cardsAlphabets = ['A', 'B', 'C', 'D', 'E', 'F']

  const [resetCount, setResetCount] = useState(0)

  const alphabetsCss = {
    display: 'flex',
    flexWrap: 'wrap'
  }

  const resetButton = (
    <button onClick={() => setResetCount(currentCount => currentCount + 1)}>Reset All Counters</button>
  )

  return (
    <>
      {resetButton}
    <div style={alphabetsCss}>
      {/* <button onClick={decrementCount}>-</button>
      {count}
    <button onClick={incrementCount}>+</button> */}
      {/* <NavBar/> */}
      {cardsAlphabets.map((alphabet, index) => 
        <Cards key={index} letter={alphabet} resetCount={resetCount}/>
        )}
    </div>
        </>
  );
}

export default InterviewTest;