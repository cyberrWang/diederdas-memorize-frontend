import React from 'react'
import { useGlobalContext } from './context'

const Form = () => {
  const { 
    editWord, setEditWord, handleSubmit, message
  } = useGlobalContext();

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <h3>add / edit word</h3>
      {message
        ? <p className='message'>{message}</p>
        : <p><br></br></p>
      }
      <div className='form-single'>
        <label>word</label>
        <input 
          type='text' 
          value={editWord.noun} 
          onChange={
            e => setEditWord({...editWord, noun: e.target.value})
          }
        />
      </div>
      <div className='form-single'>
        <label>gender</label>
        <input 
          type='text' 
          value={editWord.gender}
          onChange={
            e => setEditWord({...editWord, gender: e.target.value})
          }
        />
      </div>
      <div className='submit-btn-container'>
        <button className='submit-btn'>submit</button>
      </div>
    </form>
  )
}

export default Form
