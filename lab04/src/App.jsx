import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeBox from "./components/RecipeBox";
import RecipeDetail from "./components/RecipeDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<RecipeBox />} />
                <Route path="/recipe/:id" element={<RecipeDetail />} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
