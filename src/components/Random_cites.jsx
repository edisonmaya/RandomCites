import './Random_cites.css'
import getRandomData from '../utils/getRandomData'
import dbQuotes from '../db/quotes.json'
//import dbImage from '../db/image.json'

const randomCites = ({ quote, setQuote, change, setChange, background }) => {
  //LOGICA
  const handlerLuck = () => {
    setQuote(getRandomData(dbQuotes))
    setChange(getRandomData(background))
  }
  //VISIBLE    style={ {backgroundImage: `url(${change.image})` }}
  return (
    <section className="container" >
      <div className='title'>GALLETAS DE LA FORTUNA</div>
      <section className='container_sub_phra'>
        <button onClick={handlerLuck} className='subtitle'>Probar mi suerte</button>
        <div className='container__phrase'>
          <h3 className='phrase'>{quote.phrase}</h3>
        </div>
      </section>
      <footer className='footer'>Author: {quote.author}</footer>
    </section>
  )
}
export default randomCites