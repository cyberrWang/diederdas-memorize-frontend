import React from 'react'
import { useGlobalContext } from './context'

const TestButton = () => {
  const { checkAnswer } = useGlobalContext();

  return (
    <div className='test-btn-container'> 
      <button 
        className='test-btn' 
        onClick={() => checkAnswer('die')}
      >
        die
      </button>
      <button 
        className='test-btn'
        onClick={() => checkAnswer('der')}
      >
        der
      </button>
      <button 
        className='test-btn'
        onClick={() => checkAnswer('das')}
      >
        das
      </button>
    </div>
  )
}

export default TestButton
