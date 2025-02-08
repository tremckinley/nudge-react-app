import { useState } from 'react'
import './App.css'

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
      <div class="contain">
        <h2 id="agencyName">Agency</h2>
        <hr></hr>
        <p id="agencyDescription">The description of each agency will go here.</p>
      </div>
    </section>
    <script src="sidePanel.js"></script>
    </>
  )
}

export default App
