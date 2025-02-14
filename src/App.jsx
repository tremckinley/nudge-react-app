import { useState, useEffect } from 'react'
import './App.css'
import FlashCard from './FlashCard/FlashCard'
import FlashCardContainer from './FlashCard/FlashCardContainer'
import csvToJson from './resources/csv_to_json'

function App() {
  const [agencyData, setAgencyData] = useState(null);
  useEffect(() => {
  document.getElementById('fileInput').addEventListener('change', async (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = async function(e) {
      const text = e.target.result;
      //console.log("File content:", text); // Debugging statement
      setAgencyData(text.split('\n').map(row => row.split(',')));
      console.log(agencyData);
    };
    reader.readAsText(file);
  }
});}, []);

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
      <FlashCardContainer>
        <FlashCard AName={agencyData ? agencyData[1][2] : "Name"} ADesc={agencyData ? agencyData[1][3] : "Desc"}/>
        <FlashCard />
        <FlashCard />
      </FlashCardContainer>
    </section>
    </div>
  )
}

export default App
