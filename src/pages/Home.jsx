import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='enter-btn-container'>
      <button className='enter-btn'>
        <Link to='/list'>go to word list</Link>
      </button>
      <button className='enter-btn'>
        <Link to='/test'>go test</Link>
      </button>
    </div>
  )
}

export default Home
