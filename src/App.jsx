import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import HeaderBar from "./components/HeaderBar";
import Gallery from "./components/Gallery";
import Footer from "./components/NfFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TVshows from "./components/TVshows";
import Details from "./components/Details";

function App() {
  return (
    <div className="App bg-main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TVshows" element={<TVshows />} />
          <Route path="/details/:imdbID" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
