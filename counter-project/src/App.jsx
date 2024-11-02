import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  //let counter = 0;

  const addValue = () => {
    console.log("clicked", counter);
    setCounter(counter + 1)
  }

  const decreaseValue = () => {
    console.log("clicked", counter);
    counter -= 1;
    if(counter < 0) counter = 0;
    setCounter(counter)
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Count : {counter}</h2>
      <button
      onClick={addValue}
      >Increment</button>
      <button
      onClick={decreaseValue}
      >Decrement</button>
    </>
  )
}

export default App
