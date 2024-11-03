import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  let customObj = {
    name: 'Asif',
    age: 22
  }

  return (
    <>
      <h1 className='bg-green-500 mb-4'>Tailwind CSS</h1>
      <Card username="asif" customObj={customObj}  />
      <Card username="raza" />
    </>
  )
}

export default App
