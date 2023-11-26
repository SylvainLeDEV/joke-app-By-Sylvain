import React, { useState, useEffect } from "react";
import "./JokeCards.css";

const JokeCards = ({ category }) => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(jokes)

  const fetchJokesByCategory = async (category) => {
    try {
      const response = await fetch(
        `https://api.blablagues.net/?rub=blagues&cat=${category}&adu=1&day=0&nb=10`
      );
      const data = await response.json();

      let map = {};
      let uniqueEntries = data.filter((el) => {
        const key = el.data.id;
        const isUnique = map[key] ? false : (map[key] = true);
        return isUnique;
      });
      setJokes(uniqueEntries);
      setLoading(false);
    } catch (error) {
      console.error("Error when fetching data", error);
    }
  };

  useEffect(() => {
    if (category) {
      fetchJokesByCategory(category);
    }
  }, [category]);

  if (!jokes || !jokes.length) {
    return <p>Aucune blague disponible.</p>;
  }

  return (
    <div className="joke-cards-container">
      <ul className="joke-list">
        {jokes.map((joke) => (
          <li key={joke.data.id} className="joke-card">
            <p>{joke.data.content.text_head}</p>
            {joke.data.content.text !== "" ? (
              <p>{joke.data.content.text}</p>
            ) : (
              <p>{joke.data.content.text_hidden}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JokeCards;
