import { Routes, Route } from "react-router-dom";
import Favourites from "./components/Favourites";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="app min-h-screen bg-red-50 text-gray-600 text-lg">
        <Navbar />
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
