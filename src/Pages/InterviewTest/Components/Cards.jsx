import React, { useEffect } from 'react';
import { useState } from 'react';

const Cards = (props) => {
  const {letter, resetCount } = props
  
  const [count, setCount] = useState(0)

  const decrementCount = () => {
    setCount(count => count - 1)
  }

  const incrementCount = () => {
    setCount(count => count + 1)
  }

  const cardCss = {
    height: '200px',
    width: '200px',
    backgroundColor: 'cyan',
    margin: '20px',
    borderRadius: '10px',
    padding: '20px'
  }

  const letterCss = {
    fontWeight: 700,
    fontSize: '25px'
  }

  const counterCss = {
    width: '70px',
    display: 'flex',
    justifyContent: 'space-between'
  }

  useEffect(() => {
    setCount(0)
  }, [resetCount])


  const counter = () =>
    (
      <div style={counterCss}>
    <button onClick={decrementCount}>-</button>
    {count}
    <button onClick={incrementCount}>+</button>
      </div>
  )

  return ( 
    <div style={cardCss}>
      <div style={letterCss}>
      {letter}
      </div>
      {counter()}
    </div> 
  );
}
 
export default Cards;