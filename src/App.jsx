import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ItemDetails from "./pages/ItemDetails";
import recipesData from "./data/recipesData.json";
import { useState } from "react";

function App() {
  const [recipesArray, setRecipesArray] = useState(recipesData);

  return (
    <>
      <Navbar />
      
      <section className="main-app-container">
      <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard recipesArray={recipesArray} setRecipesArray={setRecipesArray}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/items/:recipeId" element={<ItemDetails recipesArray={recipesArray} setRecipesArray={setRecipesArray}/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
