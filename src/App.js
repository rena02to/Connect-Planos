import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";
import Home from "./pages/Home";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
