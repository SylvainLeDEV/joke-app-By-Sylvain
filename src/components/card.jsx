import React, { useState, useEffect } from 'react';

function Card() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.blablagues.net/?rub=blagues');
        const data = await response.json();
        setJokes(data);
        console.log(data)
        setLoading(false);
      } catch (error) {
        console.error('Error when fetch data', error);
      }
    };

    fetchData();
  }, []); // Le tableau vide signifie que cet effet ne dépend d'aucune variable, il s'exécute une seule fois après le rendu initial.

  return (
    <div>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <ul>
          {jokes.map((joke, index) => (
            <li key={index}>{joke.joke}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Card;
