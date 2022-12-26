import { useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Favourites from "./components/Favourites";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const [searchItem, setSeachItem] = useState("");
  const input = useRef(null);
  const handleSearch = (e) => {
    e.preventDefault();

    //api call
    getData(searchItem);

    input.current.blur();
    setSeachItem("");
  };

  // data fatching from api
  const getData = async () => {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchItem}`
    );
    if (!res.ok) throw new Error("Something Went Wrong");
    const data = await res.json();
    console.log(data);
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
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
