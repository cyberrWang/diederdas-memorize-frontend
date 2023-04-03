import React from 'react'
import { useGlobalContext } from './context'

const Word = ({ word }) => {
  const { handleEdit, handleDelete } = useGlobalContext();

  return (
    <tr>
      <td>{word.noun}</td>
      <td>{word.gender}</td>
      <td>
        <button 
          className='action-btn action-left-btn'
          onClick={() => handleEdit(word)}
        >
          edit
        </button>
        <button 
          className='action-btn'
          onClick={() => handleDelete(word.id)}
        >
          delete
        </button>
      </td>
    </tr>
  )
}

export default Word
