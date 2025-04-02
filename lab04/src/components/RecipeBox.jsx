import React, { useEffect, useReducer, useRef, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useFetchRecipes } from "../hooks/useFetchRecipes";
import "../App.css";

const recipeReducer = (state, action) => {
    switch (action.type) {
        case "SET_RECIPES":
            return action.payload;
        default:
            return state;
    }
};

const RecipeBox = React.memo(() => {
    const [recipes, dispatch] = useReducer(recipeReducer, []);
    const searchRef = useRef();
    const navigate = useNavigate(); // Hook để điều hướng trang

    const fetchedRecipes = useFetchRecipes("https://67d151bf825945773eb3d995.mockapi.io/api/bai1/salad");

    useEffect(() => {
        dispatch({ type: "SET_RECIPES", payload: fetchedRecipes });
    }, [fetchedRecipes]);

    const handleSearch = useCallback(() => {
        const query = searchRef.current.value.toLowerCase();
        const filteredRecipes = fetchedRecipes.filter(recipe => recipe.name.toLowerCase().includes(query));
        dispatch({ type: "SET_RECIPES", payload: filteredRecipes });
    }, [fetchedRecipes]);

    const handleSave = (recipeId) => {
        navigate(`/recipe/${recipeId}`); // Chuyển hướng đến trang chi tiết
    };

    const memoizedRecipes = useMemo(() => recipes, [recipes]);

    return (
        <div className="w-full p-4 bg-gray-100 min-h-screen">
            <p className="text-gray-600">{"Home > Your recipe box"}</p>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Emma Gonzalez's Recipe Box</h1>
                <div className="flex items-center">
                    <input ref={searchRef} type="text" placeholder="Search recipes..." className="p-2 border rounded-md" />
                    <button onClick={handleSearch} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md">Search</button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {memoizedRecipes.map(recipe => (
                    <div key={recipe.id} className="bg-white p-4 rounded-md shadow">
                        <img src={recipe.avatar} alt={recipe.name} className="w-full h-40 object-cover rounded-md" />
                        <h3 className="text-lg font-semibold mt-2">{recipe.name}</h3>
                        <span className="text-gray-500">{recipe.name}</span>
                        <button
                            className="mt-2 w-full bg-green-500 text-white p-2 rounded-md"
                            onClick={() => handleSave(recipe.id)} // Chuyển trang khi bấm "Save"
                        >
                            Save
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default RecipeBox;
