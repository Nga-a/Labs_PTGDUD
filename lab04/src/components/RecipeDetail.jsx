import React from "react";
import { useParams } from "react-router-dom";
import { useFetchRecipes } from "../hooks/useFetchRecipes";

const RecipeDetail = () => {
    const { id } = useParams(); // Lấy id từ URL
    const recipes = useFetchRecipes("https://67d151bf825945773eb3d995.mockapi.io/api/bai1/salad");

    const recipe = recipes.find(r => r.id === id); // Tìm công thức theo ID

    if (!recipe) {
        return <p className="text-center text-gray-600">Loading...</p>;
    }

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold">{recipe.name}</h1>
            <img src={recipe.avatar} alt={recipe.name} className="w-full h-64 object-cover rounded-md my-4" />
            <p className="text-gray-700">{recipe.description}</p>
            <p className="text-gray-500 mt-2">Cooking Time: {recipe.name}</p>
        </div>
    );
};

export default RecipeDetail;
