import { useState } from 'react'
import './App.css'
import FlashCard from './FlashCard/FlashCard'
import FlashCardContainer from './FlashCard/FlashCardContainer'

function App() {

  return (
    <div>
      <header className='flex justify-center'>
      <h1>
        Nudge's <br />
        Study Material
      </h1>
      <i className='fa fa-cat'></i>
    </header>
    <section>
      <FlashCardContainer>
        <FlashCard />
        <FlashCard />
        <FlashCard />
      </FlashCardContainer>
    </section>
    <script src="sidePanel.js"></script>
    </div>
  )
}

export default App
