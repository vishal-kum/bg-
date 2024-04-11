import { useState } from 'react'

import './App.css'

function App() {
    const turnyellow=()=>{
      document.body.style.backgroundColor = 'yellow';
    }
    const turnred=()=>{
      document.body.style.backgroundColor = 'red';
    }
    const turnolive=()=>{
      document.body.style.backgroundColor = 'olive';
    }
    const turngreen=()=>{
      document.body.style.backgroundColor = 'green';
    }
    const turnblue=()=>{
      document.body.style.backgroundColor = 'blue';
    }
  return (
    <>
      <button className='btn' onClick={turnred}>red</button>
      <button className='btn' onClick={turnolive}>olive</button>
      <button className='btn' onClick={turnyellow}>yellow</button>
      <button className='btn' onClick={turngreen}>green</button>
      <button className='btn' onClick={turnblue}>blue</button>
    </>
  )
}

export default App
