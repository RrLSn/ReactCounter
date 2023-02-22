import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Display from './components/Display'

function App() {
  const [count, setCount] = useState(0)
  const increase = () => setCount(count + 1)
  const decreased = () => setCount(count - 1)
  const reset = () => setCount(0)


  return (
    <div className=' w-[100vw] h-[100vh] flex justify-center py-[13rem]'>
      <div className='w-[30rem] h-[20rem] bg-[black] text-white text-center p-[4rem]'>
      <Display Count={count} />
      <Button text="+" handleClick={increase}/>
      <Button text="Reset" handleClick={reset}/>
      <Button text="-" handleClick={decreased}/>
      </div>
    </div>
  )
}

export default App
