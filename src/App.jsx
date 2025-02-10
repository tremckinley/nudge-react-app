import { useState } from 'react'
import './App.css'
import FlashCard from './FlashCard/FlashCard'
import FlashCardContainer from './FlashCard/FlashCardContainer'

function App() {

  return (
    <>
      <header>
      <h1>
        Nudge's <br />
        Study Material
      </h1>
      <image id="nudge" src="./icons/nudge.png" />
    </header>
    <section>
      <FlashCardContainer>
        <FlashCard />
      </FlashCardContainer>
    </section>
    <script src="sidePanel.js"></script>
    </>
  )
}

export default App
