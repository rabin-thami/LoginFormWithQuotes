import { useState, useEffect } from "react";

export default function DailyQuotes() {
  const [quotes, setQuotes] = useState();

  useEffect(() => {
    const fetchQuotes = () => {
      fetch('https://programming-quotesapi.vercel.app/api/random')
        .then(res => res.json())
        .then(data => {
          setQuotes(data);
          const currentTime = Date.now();
          localStorage.setItem('lastFetchTime', currentTime);
          localStorage.setItem('lastQuote', JSON.stringify(data)); // Save the actual quote
        });
    };

    const lastFetchTime = parseInt(localStorage.getItem('lastFetchTime')) || 0;
    const elapsedTime = Date.now() - lastFetchTime;
    if (elapsedTime > 24 * 60 * 60 * 1000) {
      fetchQuotes();
    } else {
      const lastQuote = JSON.parse(localStorage.getItem('lastQuote'));
      if (lastQuote) {
        setQuotes(lastQuote);
      }
    }


    const timer = setInterval(fetchQuotes, 24 * 60 * 60 * 1000);

    return () => clearInterval(timer);
  }, []);


  return (
    <div className="quotes-container">
      <p className="quotes">{quotes ? quotes.quote : "Loading..."}</p>
      <p className="author">- {quotes ? quotes.author : "Author"}</p>
    </div>
  );
}
