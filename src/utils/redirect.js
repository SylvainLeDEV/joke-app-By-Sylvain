import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "./categories";

export const usePageLoadRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("firstLoadDone") === null) {
      localStorage.setItem("firstLoadDone", "1");
    } else {
      navigate("/joke-app-By-Sylvain");
    }
  }, []);
};
export const useReturnAlwaysOnRadomJoke = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Vérifier l'URL ici et rediriger si nécessaire
    const currentPath = window.location.pathname;
    console.log(currentPath);

    const baseUrl = "/joke-app-By-Sylvain";
    if (!currentPath.startsWith(baseUrl)) {
      navigate(baseUrl);
    } else {
      const categorySlug = currentPath.substring(baseUrl.length + 1);
      console.log(categorySlug)
      if (!categories.some((category) => category.slug === categorySlug)) {
        navigate(baseUrl);
      }
    }
  }, [navigate]);
};
