import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BurgerMenu.css";
import {usePageLoadRedirect, useReturnAlwaysOnRadomJoke} from "../../utils/redirect";
import { categories } from "../../utils/categories";

const BurgerMenu = ({ onCategorySelect }) => {
  usePageLoadRedirect();
  useReturnAlwaysOnRadomJoke();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (categoryId) => {
    onCategorySelect(categoryId);
    toggleMenu();
    const selectedCat = categories.find((cat) => cat.id === categoryId);
    onCategorySelect(selectedCat);
  };

  return (
    <div className={`lg:hidden p-3 bg-gray-900 flex items-center`}>
      <button
        onClick={toggleMenu}
        className={`burger-menu-button ${isOpen ? "open" : ""} my-2`}
      >
        <span className={`block h-2 w-6 bg-white mb-1`}></span>
        <span className={`block h-2 w-6 bg-white mb-1`}></span>
        <span className={`block h-2 w-6 bg-white`}></span>
      </button>
      <div className={`w-11/12 text-center`}>
        <h1 className={`text-white text-2xl`}>😂</h1>
      </div>

      {isOpen && (
        <div className={`burger-menu show`}>
          <ul>
            {categories.map((category) => (
              <li key={category.id} className="mb-4">
                <Link
                  to={`/joke-app-By-Sylvain/${category.slug}`}
                  className="text-xl text-gray-700 font-semibold hover:text-gray-900"
                  onClick={() => handleCategoryClick(category.id)}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
