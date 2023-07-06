import { useState } from 'react'
import Menu from './components/Menu';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu></Menu>
    </>
  )
}

export default App
