import React, { useState, useEffect } from 'react';

function Card() {
  const [jokes, setJokes] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.blablagues.net/?rub=blagues');
        const data = await response.json();
        setJokes(data.data.content);
        setLoading(false);
      } catch (error) {
        console.error('Error when fetch data', error);
      }
    };
    fetchData();
  }, []); 
console.log(jokes.text)
  return (
    <div>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <p>
          {jokes.text}
        </p>
      )}
    </div>
  );
}

export default Card;
