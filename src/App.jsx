import './App.css'
import { useState } from 'react'
import Random_cites from './components/Random_cites.jsx'
import getRandomData from './utils/getRandomData.js'
import quotes from './db/quotes.json'
//import image from './db/image.json'


const background =["background1","background2","background3"]
function App() {
  const [quote, setQuote] = useState(getRandomData(quotes))
  //const [change, setChange] = useState(getRandomData(image))
  const [change, setChange] = useState(getRandomData(background))
  return (
    <main className={`main ${change}`} >
      <Random_cites quote={quote} change={change} setChange={setChange} setQuote={setQuote} background={background}></Random_cites>
    </main>
  )
}

export default App
