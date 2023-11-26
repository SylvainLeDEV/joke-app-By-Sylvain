import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./BurgerMenu.css";
import usePageLoadRedirect from "../../utils/redirect";
import { categories } from "../../utils/categories";

const BurgerMenu = ({ onCategorySelect }) => {
  usePageLoadRedirect()

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
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        className={`burger-menu-button ${isOpen ? "open" : ""}`}
      >
        <span className={`block h-2 w-6 bg-gray-500 mb-1`}></span>
        <span className={`block h-2 w-6 bg-gray-500 mb-1`}></span>
        <span className={`block h-2 w-6 bg-gray-500`}></span>
      </button>
      {isOpen && (
        <div className={`burger-menu show`}>
          <ul>
            {categories.map((category) => (
              <li key={category.id} className="mb-4">
                <Link
                  to={`/${category.slug}`}
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
