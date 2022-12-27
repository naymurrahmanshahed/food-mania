import { useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Favourites from "./components/Favourites";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const [searchItem, setSeachItem] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const input = useRef(null);
  const handleSearch = (e) => {
    e.preventDefault();

    //api call
    getData(searchItem);
    console.log(recipes);
    input.current.blur();
    setSeachItem("");
    setRecipes([]);
    setError("");
  };

  // data fatching from api
  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchItem}`
      );
      if (!res.ok) throw new Error("Something Went Wrong");
      const data = await res.json();
      if (data.results === 0) {
        throw new Error("No Recipe Found");
      }
      setRecipes(data?.data?.recipes);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <div className="app min-h-screen bg-red-50 text-gray-600 text-lg">
        <Navbar
          searchItem={searchItem}
          setSeachItem={setSeachItem}
          input={input}
          handleSearch={handleSearch}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                recipes={recipes}
                setRecipes={setRecipes}
                loading={loading}
                error={error}
              />
            }
          />

          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
