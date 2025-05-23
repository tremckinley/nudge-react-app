import { useState, useEffect, Image, useContext } from 'react'
import './App.css'
import FlashCard from './FlashCard/FlashCard'
import FlashCardContainer from './FlashCard/FlashCardContainer'
import MenuBar from './MenuBar/MenuBar';

function App() {
  const [agencyData, setAgencyData] = useState([]);
  const [cardIndex, setCardIndex] = useState(1)
  const [paused, setPaused] = useState(false);
  const [speed, setSpeed] = useState('normal');
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

  const handlePause = () => {
    setPaused(!paused);
  }

  const handleSpeed = () => {
    const speeds = ['slow', 'normal', 'fast'];
    let index = speeds.indexOf(speed);
    if (index == speeds.length - 1){
      console.log(speed)
      setSpeed(speeds[0]);
    }
    else {
      console.log(speed)
      setSpeed(speeds[index + 1]);
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

    if (paused === false) {
    const intervalTime = speed === 'fast' ? 5000 : speed === 'normal' ? 10000 : 15000;
    const interval = setInterval(() => {
      console.log('interval')
      setCardIndex(cardIndex + 3);
    }, intervalTime);

    return () => clearInterval(interval);
    }
  }, [cardIndex, paused]);


  return (
    
    <div className='max-w-4xl mx-auto border'>
      <header className='flex flex-col justify-center items-center'>
        <MenuBar handleSpeed={handleSpeed} speed={speed}/>      
      <input type='file' id='fileInput' className='border border-[indigo] max-w-[90%] p-2 rounded bg-white'/>
    </header>
    <section>
      <FlashCardContainer handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} handlePause={handlePause} paused={paused}>
        {setFlashCards()}
      </FlashCardContainer>
    </section>
    </div>
  
  )
}

export default App;
