import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './component/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
    <Navbar/>
      </header>
      <main>
      <Outlet/>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
