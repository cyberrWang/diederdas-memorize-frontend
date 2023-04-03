import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import List from './pages/List'
import Test from './pages/Test'
import './app.css'

const App = () => {
  return (
    <main>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<List />} />
          <Route path='/test' element={<Test />} />
      </Routes>
    </main>
    
  )
}

export default App

