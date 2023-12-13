import React, { useState, useEffect } from "react";
import "./JokeCards.css";
import { usePageLoadRedirect, useReturnAlwaysOnRadomJoke } from "../../utils/redirect";

const JokeCards = ({ category }) => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJokesByCategory = async (category) => {
    try {
      const response = await fetch(
        category === "random"
          ? `https://api.blablagues.net/?rub=blagues&nb=10`
          : `https://api.blablagues.net/?rub=blagues&cat=${category}&adu=1&day=0&nb=10`
      );
      setLoading(false);
      const data = await response.json();

      let map = {};
      let uniqueEntries = data.filter((el) => {
        const key = el.data.id;
        const isUnique = map[key] ? false : (map[key] = true);
        return isUnique;
      });

      setJokes((prevJokes) => {
        const newEntries = uniqueEntries.filter((el) => {
          const isNew = !prevJokes.some(
            (prevEl) => prevEl.data.id === el.data.id
          );
          return isNew;
        });
        return [...prevJokes, ...newEntries];
      });
    } catch (error) {
      console.error("Error when fetching data", error);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    fetchJokesByCategory(category);
  };
  useEffect(() => {
    if (category) {
      usePageLoadRedirect();
      useReturnAlwaysOnRadomJoke();
      setJokes([]);
      setLoading(true);
      fetchJokesByCategory(category);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [category]);

  if (!jokes || (!jokes.length && !loading)) {
    return <p>Aucune blague disponible.</p>;
  }
  if (loading) {
    return <p>Chargement</p>;
  }

  return (
    <div className={`joke-cards-container`}>
      <ul className="joke-list">
        {jokes.map((joke) => (
          <li key={joke.data.id} className={`joke-card  bg-card-color`}>
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
