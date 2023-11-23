import React from "react";
import "./JokeCards.css";

const JokeCards = ({ jokes }) => {
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
