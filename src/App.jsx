import { useState, useEffect } from 'react'
import './App.css'
import FlashCard from './FlashCard/FlashCard'
import FlashCardContainer from './FlashCard/FlashCardContainer'
import csvToJson from './resources/csv_to_json'

function App() {
  const [agencyData, setAgencyData] = useState([]);
  const [cardIndex, setCardIndex] = useState(1)

  const setFlashCards = () => {
    const cards = [];
    if (agencyData.length === 0) {
      return cards;
    }
    for (let index = cardIndex; index < (cardIndex + 3); index++) {
      cards.push(
        <FlashCard key={index} AName={agencyData[index][2]} ADesc={agencyData[index][3]} />
      );
    }
    return cards;
  }

  const handleLeftClick = (fast=false) => {
    let speed = 1;
    fast ? speed = 3 : speed = 1;
    if (!fast && cardIndex > 0) {
      setCardIndex(cardIndex - speed);
    } 
    else if (fast && cardIndex > 2) {
      setCardIndex(cardIndex - speed);
    }
    else {
      setCardIndex(0);
    }
  }

  const handleRightClick = (fast=false) => {
    let speed = 1;
    fast ? speed = 3 : speed = 1;
    if (!fast && cardIndex < agencyData.length - speed) {
      setCardIndex(cardIndex + 1);
    }
    else if (fast && cardIndex < agencyData.length - 3) {
      console.log('fast right click')
      setCardIndex(cardIndex + speed);
    }
    else {
      setCardIndex(agencyData.length - 1);
    }
  }

  useEffect(() => {
    const savedData = localStorage.getItem('agencyData');
    if (savedData) {
      setAgencyData(JSON.parse(savedData));
    }

    document.getElementById('fileInput').addEventListener('change', async (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = async function(e) {
          const text = e.target.result;
          const pulledList = text.split('\n').map(row => row.split(','));
          const dataToSave = pulledList.slice(1, pulledList.length);
          setAgencyData(dataToSave);
          localStorage.setItem('agencyData', JSON.stringify(dataToSave));
        };
        reader.readAsText(file);
      }
    });

    const interval = setInterval(() => {
      setCardIndex(cardIndex + 3);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <header className='flex flex-col justify-center'>
        <div className='flex items-center'>
      <h1>
        Nudge's <br />
        Study Material
      </h1>
      <i className='fa fa-cat'></i>
      </div>
      <input type='file' id='fileInput'/>
    </header>
    <section>
      <FlashCardContainer handleLeftClick={handleLeftClick} handleRightClick={handleRightClick}>
        {setFlashCards()}
      </FlashCardContainer>
    </section>
    </div>
  )
}

export default App
