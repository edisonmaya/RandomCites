import './App.css'
import { useState } from 'react'
import Random_cites from './components/Random_cites.jsx'
import getRandomData from './utils/getRandomData.js'
import quotes from './db/quotes.json'
import image from './db/image.json'

function App() {
  const [quote, setQuote] = useState(getRandomData(quotes))
  const [change, setChange] = useState(getRandomData(image))

  return (
    <main className='main'>
      <Random_cites quote={quote} change={change} setChange={setChange} setQuote={setQuote}></Random_cites>
    </main>
  )
}

export default App
