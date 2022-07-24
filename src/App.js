import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Hiragana from "./Components/Pages/Hiragana/Hiragana";
import Katakana from "./Components/Pages/Katakana/Katakana";
import Both from "./Components/Pages/Both/Both";

function App() {
  return (
    <BrowserRouter>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hiragana" element={<Hiragana />} />
        <Route path="/katakana" element={<Katakana />} />
        <Route path="/both" element={<Both />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
