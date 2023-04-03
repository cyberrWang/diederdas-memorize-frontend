import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <h2>diederdas memorize</h2>
      <div className='nav-btn-container'>
        <button className='nav-btn'><Link to='/'>home</Link></button>
        <button className='nav-btn'><Link to='/list'>list</Link></button>
        <button className='nav-btn'><Link to='/test'>test</Link></button>
      </div>
    </nav>
  )
}

export default Header
