import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import RecipesList from "./components/RecipesList/RecipesList";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ItemDetails from "./pages/ItemDetails";

function App() {
  return (
    <>
      <Navbar />
      <section className="main-app-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/items" element={<ItemDetails/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <RecipesList />
      </section>
      <Footer />
    </>
  );
}

export default App;
