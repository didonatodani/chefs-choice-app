import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import RecipesList from "./components/RecipesList/RecipesList";

function App() {
  return (
    <>
      <Navbar />
      <section className="main-app-container">
        <Sidebar />
        <RecipesList />
      </section>
      <Footer />
    </>
  );
}

export default App;
