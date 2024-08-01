import {useState} from "react";
import './App.css'

// Componets
import Header from './components/Header/Header'
import SectionHero from './components/SectionHero/SectionHero'
import ModalBatle from './components/ModalBatle/ModalBatle'


function App() {
  const [heroi1, setHeroi1] = useState(null)
  const [heroi2, setHeroi2] = useState(null)

  return (
    <>
      <Header />
      <SectionHero />
      <ModalBatle />
    </>
  )
}

export default App
