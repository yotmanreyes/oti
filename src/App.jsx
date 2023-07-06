import { useState } from 'react'
import Menu from './components/Menu';
import Banner from './components/Banner';
import Services from './sections/Services';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu></Menu>
      <Banner></Banner>
      <Services></Services>
    </>
  )
}

export default App
