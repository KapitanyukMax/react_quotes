import './Quote.css';
import { useState } from 'react';
import { QUOTES } from './quotes-mock';

function Quote() {
  const quotes = QUOTES;

  const [quote, setQuote] = useState(quotes[0]);
  const chooseNewQuote = () => setQuote(quotes[Math.floor(Math.random() * quotes.length)]);

  return (
    <div className='Quote'>
      <h3>Quote of the day:</h3>

      <q>{quote.text}</q>
      <p className='author'>{quote.author}</p>

      <button onClick={chooseNewQuote}>Show new quote</button>
    </div>
  );
}

export default Quote;
