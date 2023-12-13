import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// -----
import BurgerMenu from "./components/burger-menu/BurgerMenu";
import JokeCards from "./components/joke-cards/JokeCards";
import Home from "./components/home/Home";
// -----
function App() {
  const [category, setCategory] = useState({});
  
  return (
    <div>
      <Router>
        <BurgerMenu onCategorySelect={setCategory} />
        <Routes>
          <Route path="/joke-app-By-Sylvain" element={<Home />} />
          <Route
            path={`/joke-app-By-Sylvain/:${category.slug}`}
            element={<JokeCards category={category.slug} />}
          />
          <Route path="*" element={<Navigate to="/joke-app-By-Sylvain" />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
