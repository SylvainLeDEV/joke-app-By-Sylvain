import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BurgerMenu from "./components/burger-menu/BurgerMenu";
import JokeCards from "./components/joke-cards/JokeCards";

// Fetch this API
// https://api.blablagues.net/?rub=blagues
function App() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Vos données de catégories ici
  const categories = [
    { id: 1, name: "Belges", slug: "belges" },
    { id: 2, name: "Religion", slug: "religion" },
    // Ajoutez d'autres catégories selon vos besoins
  ];

  const fetchJokesByCategory = async (category) => {
    try {
      const response = await fetch(
        `https://api.blablagues.net/?rub=blagues&cat=${category}&adu=1&day=0&nb=5`
      );
      const data = await response.json();
      setJokes(data);
      setLoading(false);
    } catch (error) {
      console.error("Error when fetching data", error);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      fetchJokesByCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const handleCategorySelect = (categoryId) => {
    const selectedCat = categories.find((cat) => cat.id === categoryId);
    setSelectedCategory(selectedCat.slug);
  };
  console.log(jokes);

  return (
    <Router>
      <div>
        <BurgerMenu
          categories={categories}
          onCategorySelect={handleCategorySelect}
        />

        <Routes exact path="/">
          <Route path="/" element={<Home />} />
          {categories.map((category) => (
            <Route
              key={category.slug}
              path={`/${category.slug}`}
              element={<JokeCards jokes={jokes} />}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Bienvenue sur la page d'accueil. Choisissez une catégorie ci-dessus.</p>
    </div>
  );
};


export default App;
