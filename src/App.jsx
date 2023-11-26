import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import BurgerMenu from "./components/burger-menu/BurgerMenu";
import JokeCards from "./components/joke-cards/JokeCards";

function App() {
  const [category, setCategory] = useState({});


  return (
    <Router>
      <div>
        <BurgerMenu onCategorySelect={setCategory} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            // path={`/${category.slug}`}
            path={`/:${category.slug}`}
            element={<JokeCards category={category.slug} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Bienvenue sur la page d'accueil. Choisissez une catégorie ci-dessus.
      </p>
    </div>
  );
};

export default App;
