import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import NavBar from "./reusableComponents/NavBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
