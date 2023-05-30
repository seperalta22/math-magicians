import { useEffect, useState } from 'react';

function Quotes() {
  const [quotes, setQuotes] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // usually I would put this in a .env file but I'm not sure
  // if the reviewer will be able to see it.
  const API_ID = 'dByEAwV9LJFlCKUgjAX60A==fvZH8LP91QrzRc6I';
  const URL = 'https://api.api-ninjas.com/v1/quotes';

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(URL, {
          headers: {
            'X-Api-Key': API_ID,
          },
        });
        const data = await response.json();
        setQuotes(data[0]);
        setLoading(false);
      } catch (error) {
        setError('Error fetching quote');
        setLoading(false);
      }
    };
    fetchQuote();
  }, []);

  return (
    <div className="quotes-container">
      {loading && <div className="loading">Loading...</div>}
      {error && (
      <div className="error">
        {error}
        - Please try again later
      </div>
      )}
      {quotes && (
      <p className="quote">
        &quot;
        {quotes.quote}
        {' '}
        &quot; -
        <span>
          {' '}
          {quotes.author}
        </span>
      </p>
      )}
    </div>
  );
}

export default Quotes;
