// import { useState } from 'react'
import './App.css'
import Menu from "./components/Menu"
import Home from './pages/home'

function App() {

  return (
    <>
      <section className="home">
        <Menu />
        <Home />
      </section>
    </>
  )
}

export default App
