import { useState, useEffect } from "react";

export function useFetchRecipes(url) {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setRecipes(data))
            .catch((error) => console.error("Error fetching recipes:", error));
    }, [url]);

    return recipes;
}
