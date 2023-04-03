import React from 'react'
import { useGlobalContext } from '../components/context'
import TestButton from '../components/TestButton';

const Test = () => {
  const { testWord, score } = useGlobalContext();

  return (
    <div>
      <div className='score'>
        <p>right: {score.right}</p>
        <p>wrong: {score.wrong}</p>
      </div>
      <div className='test-container'>
        <div className='test-card'>
          <h3>{testWord.noun}</h3>
        </div>
        <TestButton />
      </div>
    </div>
  )
}

export default Test
