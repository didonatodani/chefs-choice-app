// consider organizing the imports in a readable way separating the pages, components, etc

// ----- hooks and libraries -----
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// ----- css -----
import "./App.css";

// ----- components -----
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

// ----- pages -----
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ItemDetails from "./pages/ItemDetails";

// ----- data -----
import recipesData from "./data/recipesData.json";

function App() {
  const [recipesArray, setRecipesArray] = useState(recipesData);

  return (
    <>
      <Navbar />
      {/* Routes are well organized, the state is shared in multiple pages */}
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
