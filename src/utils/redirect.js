import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "./categories";

export const usePageLoadRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("firstLoadDone") === null) {
      localStorage.setItem("firstLoadDone", "1");
    } else {
      navigate("*");
    }
  }, []);
};
export const useReturnAlwaysOnRadomJoke = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const currentPath = window.location.pathname;

    const baseUrl = "/joke-app-By-Sylvain";
    if (!currentPath.startsWith(baseUrl)) {
      navigate(baseUrl);
    } else {
      const categorySlug = currentPath.substring(baseUrl.length + 1);
      if (!categories.some((category) => category.slug === categorySlug)) {
        navigate(baseUrl);
      }
    }
  }, [navigate]);
};
